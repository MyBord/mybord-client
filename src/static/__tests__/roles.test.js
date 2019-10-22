import roles from '../roles';

roles.allIds.forEach((role) => {
  describe(`#${role}`, () => {
    test('every role has a description field', () => {
      expect(typeof roles.byId[role].description).toBe('string');
    });

    test('every role has a proper defaultPage object', () => {
      expect(typeof roles.byId[role].defaultPage).toBe('object');
      expect(roles.byId[role].defaultPage.route).toBeTruthy();
      expect(roles.byId[role].defaultPage.priority).toBeTruthy();
    });
  });
});
