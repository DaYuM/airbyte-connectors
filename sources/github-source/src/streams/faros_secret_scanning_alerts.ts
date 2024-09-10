import {StreamKey, SyncMode} from 'faros-airbyte-cdk';
import {SecretScanningAlert} from 'faros-airbyte-common/github';
import {Utils} from 'faros-js-client';
import {Dictionary} from 'ts-essentials';

import {GitHub} from '../github';
import {
  RepoStreamSlice,
  StreamBase,
  StreamState,
  StreamWithRepoSlices,
} from './common';

export class FarosSecretScanningAlerts extends StreamWithRepoSlices {
  getJsonSchema(): Dictionary<any, string> {
    return require('../../resources/schemas/farosSecretScanningAlerts.json');
  }

  get primaryKey(): StreamKey {
    return ['org', 'repo', 'number'];
  }

  get cursorField(): string | string[] {
    return ['updated_at'];
  }

  async *readRecords(
    syncMode: SyncMode,
    cursorField?: string[],
    streamSlice?: RepoStreamSlice,
    streamState?: StreamState
  ): AsyncGenerator<SecretScanningAlert> {
    const org = streamSlice?.org;
    const repo = streamSlice?.repo;
    const state = streamState?.[StreamBase.orgRepoKey(org, repo)];
    const [startDate, endDate] =
      syncMode === SyncMode.INCREMENTAL
        ? this.getUpdateRange(state?.cutoff)
        : this.getUpdateRange();
    const github = await GitHub.instance(this.config, this.logger);
    yield* github.getSecretScanningAlerts(org, repo, startDate, endDate);
  }

  getUpdatedState(
    currentStreamState: StreamState,
    latestRecord: SecretScanningAlert,
    slice: RepoStreamSlice
  ): StreamState {
    const latestRecordCutoff = Utils.toDate(latestRecord?.updated_at ?? 0);
    return this.getUpdatedStreamState(
      latestRecordCutoff,
      currentStreamState,
      StreamBase.orgRepoKey(slice.org, slice.repo)
    );
  }
}