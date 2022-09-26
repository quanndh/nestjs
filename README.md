# Fullnode service API

TypeScript + Nestjs + GraphQL + PostgreSQL + TypeORM

- [Get started](/docs/getting-started.md) Please take a tour

## Requirement

- [Node.js](https://nodejs.org/): >= 10.13.0

## Environment

- `PORT`: number
- `TZ`: string - Should be UTC
- `DATABASE_PORT`: number
- `DATABASE_HOST`: string
- `DATABASE_USER`: string
- `DATABASE_PASSWORD`: string
- `DATABASE_NAME`: string
- `DATABASE_SYNC`: true | false
- `DATABASE_LOGGING`: true | false

- `KONG_URL`: kong api url including protocol and port (if exist)
- `KONG_FULLNODE_ROUTE_ID`: kong fullnode route id

- `ELK_URL`: ELK information
- `ELK_USER`:
- `ELK_PASSWORD`:

## Start working

- ![Working Process](/docs/working-process.png 'Working Process')
