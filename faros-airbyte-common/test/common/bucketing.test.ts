import {
  applyRoundRobinBucketing,
  bucket,
  nextBucketId,
  validateBucketingConfig,
} from '../../src/common';

describe('validateBucketingConfig', () => {
  test('should not throw for valid config', () => {
    expect(() =>
      validateBucketingConfig({bucket_total: 1, bucket_id: 1})
    ).not.toThrow();
    expect(() =>
      validateBucketingConfig({bucket_total: 3, bucket_id: 2})
    ).not.toThrow();
    expect(() =>
      validateBucketingConfig({bucket_total: 5, bucket_id: 5})
    ).not.toThrow();
  });

  test('should throw for invalid bucket_total', () => {
    expect(() =>
      validateBucketingConfig({bucket_total: 0, bucket_id: 1})
    ).toThrow('bucket_total must be a positive integer');
    expect(() =>
      validateBucketingConfig({bucket_total: -1, bucket_id: 1})
    ).toThrow('bucket_total must be a positive integer');
  });

  test('should throw for invalid bucket_id', () => {
    expect(() =>
      validateBucketingConfig({bucket_total: 5, bucket_id: 0})
    ).toThrow('bucket_id must be between 1 and 5');
    expect(() =>
      validateBucketingConfig({bucket_total: 5, bucket_id: 6})
    ).toThrow('bucket_id must be between 1 and 5');
  });

  test('should warn when bucket_ranges present but round_robin disabled', () => {
    const logger = jest.fn();
    validateBucketingConfig(
      {
        bucket_total: 5,
        bucket_id: 1,
        bucket_ranges: '1-3',
        round_robin_bucket_execution: false,
      },
      logger
    );
    expect(logger).toHaveBeenCalledWith(
      'bucket_ranges 1-3 ignored because round_robin_bucket_execution is not enabled'
    );
  });

  test('should not warn when bucket_ranges and round_robin both present', () => {
    const logger = jest.fn();
    validateBucketingConfig(
      {
        bucket_total: 5,
        bucket_id: 1,
        bucket_ranges: '1-3',
        round_robin_bucket_execution: true,
      },
      logger
    );
    expect(logger).not.toHaveBeenCalled();
  });
});

describe('getNextBucketId', () => {
  test('should return 1 when bucket_total is 1', () => {
    const config = {bucket_total: 1};
    const state = undefined;
    expect(nextBucketId(config, state)).toBe(1);
  });

  test('should return next bucket id when last_executed_bucket_id is provided', () => {
    const config = {bucket_total: 3};
    expect(
      nextBucketId(config, {
        __bucket_execution_state: {last_executed_bucket_id: 1},
      })
    ).toBe(2);
    expect(
      nextBucketId(config, {
        __bucket_execution_state: {last_executed_bucket_id: 2},
      })
    ).toBe(3);
    expect(
      nextBucketId(config, {
        __bucket_execution_state: {last_executed_bucket_id: 3},
      })
    ).toBe(1);
  });

  test('should wrap around to 1 when reaching the last bucket', () => {
    const config = {bucket_total: 3};
    const state = {__bucket_execution_state: {last_executed_bucket_id: 3}};
    expect(nextBucketId(config, state)).toBe(1);
  });

  test('should use default bucket_total of 1 when not provided', () => {
    const config = {};
    const state = undefined;
    expect(nextBucketId(config, state)).toBe(1);
  });

  test('should use bucket_total as last_executed_bucket_id when state is undefined', () => {
    const config = {bucket_total: 5};
    const state = undefined;
    expect(nextBucketId(config, state)).toBe(1);
  });

  test('should use bucket ranges when provided', () => {
    const config = {
      bucket_total: 10,
      round_robin_bucket_execution: true,
      bucket_ranges: ['2-4', '7-8'],
    };

    expect(
      nextBucketId(config, {
        __bucket_execution_state: {last_executed_bucket_id: 2},
      })
    ).toBe(3);

    expect(
      nextBucketId(config, {
        __bucket_execution_state: {last_executed_bucket_id: 4},
      })
    ).toBe(7);

    expect(
      nextBucketId(config, {
        __bucket_execution_state: {last_executed_bucket_id: 8},
      })
    ).toBe(2);
  });

  test('should handle bucket ranges as comma-separated string', () => {
    const config = {
      bucket_total: 10,
      round_robin_bucket_execution: true,
      bucket_ranges: '2,4,6,8',
    };

    expect(
      nextBucketId(config, {
        __bucket_execution_state: {last_executed_bucket_id: 2},
      })
    ).toBe(4);

    expect(
      nextBucketId(config, {
        __bucket_execution_state: {last_executed_bucket_id: 8},
      })
    ).toBe(2);
  });
});

describe('bucket', () => {
  test('should return value within bucket range', () => {
    const key = 'test-key';
    const data = 'test-data';
    const bucketTotal = 5;

    const result = bucket(key, data, bucketTotal);

    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(bucketTotal);
  });
});

describe('applyRoundRobinBucketing', () => {
  test('should return unchanged config and state when round robin is disabled', () => {
    const config = {round_robin_bucket_execution: false, another_field: 'test'};
    const state = {someField: 'test-value'};

    const result = applyRoundRobinBucketing(config, state);

    expect(result.config).toEqual(config);
    expect(result.state).toEqual(state);
  });

  test('should update config and state with next bucket when round robin is enabled', () => {
    const config = {
      round_robin_bucket_execution: true,
      bucket_total: 3,
    };
    const state = {
      __bucket_execution_state: {
        last_executed_bucket_id: 2,
      },
    };

    const result = applyRoundRobinBucketing(config, state);

    expect(result.config.bucket_id).toBe(3);
    expect(result.state.__bucket_execution_state.last_executed_bucket_id).toBe(
      3
    );
  });

  test('should start from bucket 1 when state is empty', () => {
    const config = {
      round_robin_bucket_execution: true,
      bucket_total: 3,
    };

    const result = applyRoundRobinBucketing(config, {});

    expect(result.config.bucket_id).toBe(1);
    expect(result.state.__bucket_execution_state.last_executed_bucket_id).toBe(
      1
    );
  });

  test('should preserve other config properties', () => {
    const config = {
      round_robin_bucket_execution: true,
      bucket_total: 3,
      other_prop: 'value',
    };

    const result = applyRoundRobinBucketing(config, undefined);

    expect(result.config.other_prop).toBe('value');
    expect(result.config.round_robin_bucket_execution).toBe(true);
  });

  test('should ignore bucket_ranges when round robin is disabled', () => {
    const config = {
      round_robin_bucket_execution: false,
      bucket_total: 5,
      bucket_ranges: '2-4',
      bucket_id: 1,
    };
    const state = {someField: 'test-value'};

    const result = applyRoundRobinBucketing(config, state);

    expect(result.config).toEqual(config);
    expect(result.state).toEqual(state);
  });
});
