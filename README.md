# waitsafe-queue-service

## Description

API and card scans processor that supports waitsafe application

## Installation

```bash
# start database and queue in the background
docker compose up -d

# install the dependencies
npm install
```

It is going to install all dependencies and run script that sets up database

## Running the app

```bash
# start database and queue in the background
docker compose up -d

# development
npm run start

# watch mode
npm run start:dev

# production mode
npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
