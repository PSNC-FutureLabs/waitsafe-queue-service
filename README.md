# waitsafe-queue-service

## Description

API and card scans processor that supports waitsafe application

## Prerequisites

NPM version 8
NODE version 16

## Installation

```bash
# install the dependencies
npm install
```

## Running the app

```bash
# start database and queue in the background
docker compose up -d

# and run migrations + seed
npm run prepare:dev

# then start development
npm run start

# or in watch mode
npm run start:dev

# or in debug mode
npm run start:debug

# or in production mode
npm run start:prod
```

## Test

```bash
# unit tests
npm run test

# e2e tests
npm run test:e2e

# test coverage
npm run test:cov
```
