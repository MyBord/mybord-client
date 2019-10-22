/**
 * This object provides metadata about all user roles in the app.
 *
 * @field {string} id - identifying user role.
 * @field {string} description - description of the user role.
 * @field {object} defaultPage - metadata about what the default page should be per role.
 * @field {boolean} [defaultPage.currentUserId] - if true, then the current user id should
 * be appended to the end of the declared route (defaultPage.route).
 * @field {string} defaultPage.pastWeek - If true, then the current past week string should be
 * appended to the end of the declared route (defaultPage.route).
 * @field {number} defaultPage.priority - determines which role's default page should be used
 * as the app's default page. A lower priority number will override a higher priority number.
 * @field {string} defaultPage.route - the route that should be used for the default page.
 * @field {object} noRole - what default page the user should be on if they have no role
 * assigned to them.
 * @return {object} roles - metadata about user roles.
 */
export default {
  allIds: [
    'admin',
    'advisor',
    'manager',
    'marketing',
  ],
  byId: {
    admin: {
      description: 'can edit data in the admin section.',
      defaultPage: {
        priority: 4,
        route: 'prospects',
      },
    },
    advisor: {
      description: 'can communicate with prospects.',
      defaultPage: {
        currentUserId: true,
        priority: 1,
        route: 'prospects?advisor=eq|',
      },
    },
    manager: {
      description: 'can view data about other users\' activity and set goals.',
      defaultPage: {
        pastWeek: true,
        priority: 2,
        route: 'users/activity/',
      },
    },
    marketing: {
      description: 'can view and edit marketing data.',
      defaultPage: {
        pastWeek: true,
        priority: 3,
        route: 'campaigns/report/',
      },
    },
  },
  noRole: {
    defaultPage: 'prospects',
  },
};
