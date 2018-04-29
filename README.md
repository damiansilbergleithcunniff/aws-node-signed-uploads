# Prior Art
Work here is based on the work found [in this repository](https://github.com/kalinchernev/aws-node-signed-uploads).

[This article](https://kalinchernev.github.io/tdd-serverless-jest) covers the original work and lead to the discovery of the repository.

## Motivation
We wanted a repository that would provide the base for building serverless APIs using the [serverless framework](https://serverless.com).  It needed to include `npm` run commands to do the following: 
* run [jest](https://facebook.github.io/jest/) in watch mode during development
  * leverage snapshot testing
* leverage the benefits of [webpack](https://webpack.js.org/) to build smaller code which may include funcitonaity not available in a given `node` runtime
  * specifically Lambda@Edge currently supports `node 6.10` and we may want more modern functionality
  * this is delivered through [serverless webpack](https://github.com/serverless-heaven/serverless-webpack)
* deploy to AWS as part of a CI/CD solution

## Changes
We've removed the API functionality that was in the original repository and kept only the framework which includes:

## Requirements

* Node.js >= 6.9.1
* npm >= 3.10.8

### Prerequisites
**Don't know if this is really required**
1.  Create `config.json`

Example is provided in `config.example.json`.

### How to use

Get dependencies with `yarn` or `npm install`. The following examples will assume the usage of `yarn`.

### Tests

Running all tests:

```bash
$ yarn test
```

Developing tests:

```bash
$ npx jest --watch
```

### Develop locally

Starting a local dev server and its endpoint for receiving uploads:

```bash
$ yarn start
```

### Linter

Starting the linter tasks:

```bash
$ yarn lint
```

### Deployment

[Setup your AWS credentials](https://serverless.com/framework/docs/providers/aws/guide/credentials/).

Run the following the fire the deployment:

```bash
$ yarn deploy
```

### Add functions
When you want to add functions/lambdas you can do so by manually editing the `service` file `/serverless.yaml`.  Add functions in the `functions` block by following the specifications here: https://serverless.com/framework/docs/providers/aws/guide/functions/

Unfortunately the `serverless` cli's `create` method builds a new service and that is outside the design of this particular starter.


