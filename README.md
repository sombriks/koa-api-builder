# [Koa-api-builder](https://github.com/sombriks/koa-api-builder)

![tests and coverage](https://github.com/sombriks/koa-api-builder/actions/workflows/node.js.yml/badge.svg)
[![npm version](https://img.shields.io/npm/v/koa-api-builder?style=plastic)](https://www.npmjs.com/package/koa-api-builder)
[![license](https://img.shields.io/github/license/sombriks/koa-api-builder.svg)](LICENSE)

Helper to build [koa-router](https://github.com/koajs/router) apis easily

## Dependencies

- node 14 or higher 
- koa-router
- koa

## Sample usage

```javascript
import ApiBuilder from "koa-api-builder";

const group = new ApiBuilder().path((group) => {
  group.post('/login', loginRequest)
    .post('/signup', signupRequest)
    .path('/user/:userId/accounts', ifAuthenticated, (group) => {
      group.get(listAccountsRequest)
        .post(ifAllowed, insertAccountRequest)
        .path('/:accountId', (group) => {
          group.get(findAccountRequest);
          group.put(updateAccountRequest);
          group.del(ifAllowed, delAccountRequest);
          group.get('/transactions', listTransactionsRequest);
        });
    });
});

// then we build our api definition into a regular koa-router
const router = group.build();
```

## Similar libraries

See router section on [koa wiki](https://github.com/koajs/koa/wiki#routing-and-mounting)

## Inspiration

This api builder is heavily copied from [Javalin's group handler](https://javalin.io/documentation#handler-groups)

## Roadmap

- [X] Initial implementation
- [X] Test coverage
- [X] Publish npm package
- [ ] Add special `render` pseudo-verb for template engines
- [ ] Add Server Sent Events configuration support
- [ ] Add WebSockets configuration support
