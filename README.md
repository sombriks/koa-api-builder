# Koa-api-builder

Helper to build koa-router apis easily

## Dependencies

- node 14 or higher 
- koa-router
- koa

## Sample usage

```javascript
import Group from "koa-api-builder";

const group = new Group().path('/', (group) => {
  group.post('login', loginRequest)
    .post('signup', signupRequest)
    .path('user/:userId/accounts', ifAuthenticated, (group) => {
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
- [ ] Publish npm package
- 
