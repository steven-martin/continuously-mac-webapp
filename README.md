# Continuously Mac: Webapp

Continuously Mac is a news aggregator Angular webapp dedicated to finding you the latest apple news from the very best Tech Journalists.

No complex categories, just a simple list of great Apple news.

## Features

* The latest apple news from the very best Tech Journalists.
* Articles are collected from a [dedicated API](https://github.com/steven-martin/continuously-mac-api), which is updated every 15 minutes.

## Quick Start

Download this repo locally and...

```
npm i
npm run start
```

This will start the dev server on `http://localhost:4200/`, connecting to the API at `http://api.continuously-mac.com`.

> If you wish to run both the webapp and the API locally then you will need to install the [dedicated API](https://github.com/steven-martin/continuously-mac-api) and update the API url. You can change the location of the API in the environments file. 

## Development

### Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Testing

Run `npm run lint` to anaylise the project with eslint.

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

Run `npm run test-report` to produce a unit test coverage report and will server it on `http://127.0.0.1:9875`.

Run `npm run e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Deployment

Run `npm run deploy` to deploy the app to AWS S3 bucket stated in the `deploy/` directory.

> An AWSCLI 'dev profile' is requred before hand.

