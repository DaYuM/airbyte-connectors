# Airbyte Connectors

[![CI](https://github.com/faros-ai/airbyte-connectors/actions/workflows/ci.yml/badge.svg)](https://github.com/faros-ai/airbyte-connectors/actions/workflows/ci.yml) [![Release](https://github.com/faros-ai/airbyte-connectors/actions/workflows/release.yml/badge.svg)](https://github.com/faros-ai/airbyte-connectors/actions/workflows/release.yml) [![CodeQL](https://github.com/faros-ai/airbyte-connectors/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/faros-ai/airbyte-connectors/actions/workflows/codeql-analysis.yml) [![Tag](https://img.shields.io/github/v/release/faros-ai/airbyte-connectors?label=Latest%20Release)](https://github.com/faros-ai/airbyte-connectors/releases/latest)

This repository contains [Airbyte](https://airbyte.io/) connectors used in [Faros](https://www.faros.ai) and [Faros Community Edition](https://github.com/faros-ai/faros-community-edition) platforms as well as Airbyte Connector Development Kit (CDK) for JavaScript/TypeScript.

See the READMEs inside `destinations/` and `sources/` subfolders for more information on each connector.

| Component                             | Code                                                                          | Installation                                                                             | Version                                                                                                                                                                                                                                                                                                        |
| ------------------------------------- | ----------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Airbyte CDK for JavaScript/TypeScript | [faros-airbyte-cdk](faros-airbyte-cdk)                                           | `npm i faros-airbyte-cdk`                                                              | [![npm package](https://img.shields.io/npm/v/faros-airbyte-cdk?color=blue&label=npm)](https://www.npmjs.com/package/faros-airbyte-cdk)                                                                                                                                                                              |
| Azure Active Directory Source         | [sources/azureactivedirectory-source](sources/azureactivedirectory-source)       | `docker pull farosai/airbyte-azureactivedirectory-source`                              | [![](https://img.shields.io/docker/v/farosai/airbyte-azureactivedirectory-source?color=blue&label=docker)](https://hub.docker.com/r/farosai/airbyte-azureactivedirectory-source/tags)                                                                                                                               |
| Azure Pipeline Source                 | [sources/azurepipeline-source](sources/azurepipeline-source)                     | `docker pull farosai/airbyte-azurepipeline-source`                                     | [![](https://img.shields.io/docker/v/farosai/airbyte-azurepipeline-source?color=blue&label=docker)](https://hub.docker.com/r/farosai/airbyte-azurepipeline-source/tags)                                                                                                                                             |
| Azure Repos Source                    | [sources/azure-repos-source](sources/azure-repos-source)                         | `docker pull farosai/airbyte-azure-repos-source`                                       | [![](https://img.shields.io/docker/v/farosai/airbyte-azure-repos-source?color=blue&label=docker)](https://hub.docker.com/r/farosai/airbyte-azure-repos-source/tags)                                                                                                                                                 |
| Azure Workitems Source                | [sources/azure-workitems-source](sources/azure-workitems-source)                 | `docker pull farosai/airbyte-azure-workitems-source`                                   | [![](https://img.shields.io/docker/v/farosai/airbyte-azure-workitems-source?color=blue&label=docker)](https://hub.docker.com/r/farosai/airbyte-azure-workitems-source/tags)                                                                                                                                         |
| Backlog Source                        | [sources/backlog-source](sources/backlog-source)                                 | `docker pull farosai/airbyte-backlog-source`                                           | [![](https://img.shields.io/docker/v/farosai/airbyte-backlog-source?color=blue&label=docker)](https://hub.docker.com/r/farosai/airbyte-backlog-source/tags)                                                                                                                                                         |
| Bitbucket Source                      | [sources/bitbucket-source](sources/bitbucket-source)                             | `docker pull farosai/airbyte-bitbucket-source`                                         | [![](https://img.shields.io/docker/v/farosai/airbyte-bitbucket-source?color=blue&label=docker)](https://hub.docker.com/r/farosai/airbyte-bitbucket-source/tags)                                                                                                                                                     |
| Bitbucket Server Source               | [sources/bitbucket-server-source](sources/bitbucket-server-source)               | `docker pull farosai/airbyte-bitbucket-server-source`                                  | [![](https://img.shields.io/docker/v/farosai/airbyte-bitbucket-server-source?color=blue&label=docker)](https://hub.docker.com/r/farosai/airbyte-bitbucket-server-source/tags)                                                                                                                                       |
| Buildkite Source                      | [sources/buildkite-source](sources/buildkite-source)                             | `docker pull farosai/airbyte-buildkite-source`                                         | [![](https://img.shields.io/docker/v/farosai/airbyte-buildkite-source?color=blue&label=docker)](https://hub.docker.com/r/farosai/airbyte-buildkite-source/tags)                                                                                                                                                     |
| Customer.IO Source                    | [sources/customer-io-source](sources/customer-io-source)                         | `docker pull farosai/airbyte-customer-io-source`                                       | [![](https://img.shields.io/docker/v/farosai/airbyte-customer-io-source?color=blue&label=docker)](https://hub.docker.com/r/farosai/airbyte-customer-io-source/tags)                                                                                                                                                 |
| CircleCI Source                       | [sources/circleci-source](sources/circleci-source)                               | `docker pull farosai/airbyte-circleci-source`                                          | [![](https://img.shields.io/docker/v/farosai/airbyte-circleci-source?color=blue&label=docker)](https://hub.docker.com/r/farosai/airbyte-circleci-source/tags)                                                                                                                                                       |
| Datadog Source                        | [sources/datadog-source](sources/datadog-source)                                 | `docker pull farosai/airbyte-datadog-source`                                           | [![](https://img.shields.io/docker/v/farosai/airbyte-datadog-source?color=blue&label=docker)](https://hub.docker.com/r/farosai/airbyte-datadog-source/tags)                                                                                                                                                         |
| Docker Source                         | [sources/docker-source](sources/docker-source)                                   | `docker pull farosai/airbyte-docker-source`                                            | [![](https://img.shields.io/docker/v/farosai/airbyte-docker-source?color=blue&label=docker)](https://hub.docker.com/r/farosai/airbyte-docker-source/tags)                                                                                                                                                           |
| Faros Destination                     | [destinations/airbyte-faros-destination](destinations/airbyte-faros-destination) | `npm i airbyte-faros-destination` or `docker pull farosai/airbyte-faros-destination` | [![npm package](https://img.shields.io/npm/v/airbyte-faros-destination?color=blue&label=npm)](https://www.npmjs.com/package/airbyte-faros-destination) [![](https://img.shields.io/docker/v/farosai/airbyte-faros-destination?color=blue&label=docker)](https://hub.docker.com/r/farosai/airbyte-faros-destination/tags) |
| Faros GraphQL Source                  | [sources/faros-graphql-source](sources/faros-graphql-source)                     | `docker pull farosai/airbyte-faros-graphql-source`                                     | [![](https://img.shields.io/docker/v/farosai/airbyte-faros-graphql-source?color=blue&label=docker)](https://hub.docker.com/r/farosai/airbyte-faros-graphql-source/tags)                                                                                                                                             |
| Files Source                          | [sources/files-source](sources/files-source)                                     | `docker pull farosai/airbyte-files-source`                                             | [![](https://img.shields.io/docker/v/farosai/airbyte-files-source?color=blue&label=docker)](https://hub.docker.com/r/farosai/airbyte-files-source/tags)                                                                                                                                                             |
| FireHydrant Source                    | [sources/firehydrant-source](sources/firehydrant-source)                         | `docker pull farosai/airbyte-firehydrant-source`                                       | [![](https://img.shields.io/docker/v/farosai/airbyte-firehydrant-source?color=blue&label=docker)](https://hub.docker.com/r/farosai/airbyte-firehydrant-source/tags)                                                                                                                                                 |
| GitHub Source                         | [sources/github-source](sources/github-source)                                   | `docker pull farosai/airbyte-github-source`                                            | [![](https://img.shields.io/docker/v/farosai/airbyte-github-source?color=blue&label=docker)](https://hub.docker.com/r/farosai/airbyte-github-source/tags)                                                                                                                                                           |
| Gitlab CI Source                      | [sources/gitlab-ci-source](sources/gitlab-ci-source)                             | `docker pull farosai/airbyte-gitlab-ci-source`                                         | [![](https://img.shields.io/docker/v/farosai/airbyte-gitlab-ci-source?color=blue&label=docker)](https://hub.docker.com/r/farosai/airbyte-gitlab-ci-source/tags)                                                                                                                                                     |
| Google Calendar Source                | [sources/googlecalendar-source](sources/googlecalendar-source)                   | `docker pull farosai/airbyte-googlecalendar-source`                                    | [![](https://img.shields.io/docker/v/farosai/airbyte-googlecalendar-source?color=blue&label=docker)](https://hub.docker.com/r/farosai/airbyte-googlecalendar-source/tags)                                                                                                                                           |
| Harness Source                        | [sources/harness-source](sources/harness-source)                                 | `docker pull farosai/airbyte-harness-source`                                           | [![](https://img.shields.io/docker/v/farosai/airbyte-harness-source?color=blue&label=docker)](https://hub.docker.com/r/farosai/airbyte-harness-source/tags)                                                                                                                                                         |
| Jenkins Source                        | [sources/jenkins-source](sources/jenkins-source)                                 | `docker pull farosai/airbyte-jenkins-source`                                           | [![](https://img.shields.io/docker/v/farosai/airbyte-jenkins-source?color=blue&label=docker)](https://hub.docker.com/r/farosai/airbyte-jenkins-source/tags)                                                                                                                                                         |
| Jira Source                           | [sources/jira-source](sources/jira-source)                                       | `docker pull farosai/airbyte-jira-source`                                              | [![](https://img.shields.io/docker/v/farosai/airbyte-jira-source?color=blue&label=docker)](https://hub.docker.com/r/farosai/airbyte-jira-source/tags)                                                                                                                                                         |
| Okta Source                           | [sources/okta-source](sources/okta-source)                                       | `docker pull farosai/airbyte-okta-source`                                              | [![](https://img.shields.io/docker/v/farosai/airbyte-okta-source?color=blue&label=docker)](https://hub.docker.com/r/farosai/airbyte-okta-source/tags)                                                                                                                                                         |
| OpsGenie Source                       | [sources/opsgenie-source](sources/opsgenie-source)                               | `docker pull farosai/airbyte-opsgenie-source`                                          | [![](https://img.shields.io/docker/v/farosai/airbyte-opsgenie-source?color=blue&label=docker)](https://hub.docker.com/r/farosai/airbyte-opsgenie-source/tags)                                                                                                                                                       |
| PagerDuty Source                      | [sources/pagerduty-source](sources/pagerduty-source)                             | `docker pull farosai/airbyte-pagerduty-source`                                         | [![](https://img.shields.io/docker/v/farosai/airbyte-pagerduty-source?color=blue&label=docker)](https://hub.docker.com/r/farosai/airbyte-pagerduty-source/tags)                                                                                                                                                     |
| Phabricator Source                    | [sources/phabricator-source](sources/phabricator-source)                         | `docker pull farosai/airbyte-phabricator-source`                                       | [![](https://img.shields.io/docker/v/farosai/airbyte-phabricator-source?color=blue&label=docker)](https://hub.docker.com/r/farosai/airbyte-phabricator-source/tags)                                                                                                                                                 |
| ServiceNow Source                     | [sources/servicenow-source](sources/servicenow-source)                           | `docker pull farosai/airbyte-servicenow-source`                                        | [![](https://img.shields.io/docker/v/farosai/airbyte-servicenow-source?color=blue&label=docker)](https://hub.docker.com/r/farosai/airbyte-servicenow-source/tags)                                                                                                                                                   |
| Shortcut Source                       | [sources/shortcut-source](sources/shortcut-source)                               | `docker pull farosai/airbyte-shortcut-source`                                          | [![](https://img.shields.io/docker/v/farosai/airbyte-shortcut-source?color=blue&label=docker)](https://hub.docker.com/r/farosai/airbyte-shortcut-source/tags)                                                                                                                                                       |
| SquadCast Source                      | [sources/squadcast-source](sources/squadcast-source)                             | `docker pull farosai/airbyte-squadcast-source`                                         | [![](https://img.shields.io/docker/v/farosai/airbyte-squadcast-source?color=blue&label=docker)](https://hub.docker.com/r/farosai/airbyte-squadcast-source/tags)                                                                                                                                                     |
| StatusPage Source                     | [sources/statuspage-source](sources/statuspage-source)                           | `docker pull farosai/airbyte-statuspage-source`                                        | [![](https://img.shields.io/docker/v/farosai/airbyte-statuspage-source?color=blue&label=docker)](https://hub.docker.com/r/farosai/airbyte-statuspage-source/tags)                                                                                                                                                   |
| Vanta Source                      | [sources/vanta-source](sources/vanta-source)                             | `docker pull farosai/airbyte-vanta-source`                                         | [![](https://img.shields.io/docker/v/farosai/airbyte-vanta-source?color=blue&label=docker)](https://hub.docker.com/r/farosai/airbyte-vanta-source/tags)                                                                                                                                                     |
| VictorOps Source                      | [sources/victorops-source](sources/victorops-source)                             | `docker pull farosai/airbyte-victorops-source`                                         | [![](https://img.shields.io/docker/v/farosai/airbyte-victorops-source?color=blue&label=docker)](https://hub.docker.com/r/farosai/airbyte-victorops-source/tags)                                                                                                                                                     |
| Workday Source                        | [sources/workday-source](sources/workday-source)                                 | `docker pull farosai/airbyte-workday-source`                                           | [![](https://img.shields.io/docker/v/farosai/airbyte-workday-source?color=blue&label=docker)](https://hub.docker.com/r/farosai/airbyte-workday-source/tags)                                                                                                                                                         |

# Development

1. Install [`nvm`](https://github.com/nvm-sh/nvm#installing-and-updating)
2. Install Node.js `nvm install 18 && nvm use 18`
3. Install [`Turborepo`](https://turbo.build/repo) by running `npm install turbo --global`
4. Run `npm i` to install dependencies for all projects (`turbo clean` to clean all)
5. Run `turbo build` to build all projects (for a single project add scope, e.g `turbo build --filter=airbyte-faros-destination`)
6. Run `turbo test` to test all projects (for a single project add scope, e.g `turbo test --filter=airbyte-faros-destination`)
7. Run `turbo lint` to apply linter on all projects (for a single project add scope, e.g `turbo lint --filter=airbyte-faros-destination`)

👉 Follow our guide on how to develop a new source [here](https://github.com/faros-ai/airbyte-connectors/tree/main/sources#developing-an-airbyte-source).

## Other Useful Commands

1. Audit fix `npm audit fix`
2. Clean your project `npm run clean`

Read more about `Turborepo` [here](https://turbo.build/repo).

# Build Docker Images

In order to build a Docker image for a connector run the `docker build` command and set `path` and `version` arguments.
For example for Faros Destination connector run:

```sh
docker build . --build-arg path=destinations/airbyte-faros-destination --build-arg version=0.0.1 -t airbyte-faros-destination
```

And then run it:

```sh
docker run airbyte-faros-destination
```

# Releasing

Create a [new GitHub Release](https://github.com/faros-ai/airbyte-connectors/releases/new). The [release workflow](https://github.com/faros-ai/airbyte-connectors/blob/main/.github/workflows/release.yml) will automatically publish the packages to [NPM](https://www.npmjs.com/search?q=faros) and push Docker images to [Docker Hub](https://hub.docker.com/u/farosai).
