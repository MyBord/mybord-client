import routes from '../routes';

describe('every route has an interpretedRoute and roles field', () => {
  routes.allIds.forEach((route) => {
    test(`#${route}`, () => {
      expect(typeof routes.byId[route].interpretedRoute).toBe('string');
      expect(Array.isArray(routes.byId[route].roles)).toBeTruthy();
    });
  });
});

describe('every route doesn\'t end in a slash', () => {
  routes.allIds.forEach((route) => {
    test(`#${route}`, () => {
      expect(route.substr(-1)).not.toBe('/');
    });
  });
});
