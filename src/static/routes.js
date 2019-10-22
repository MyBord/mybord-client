/**
 * This object provides metadata about all routes used the app.
 *
 * @field id {string} - identifying app route.
 * @field [happyFoxLink] {string} - Url that points to a help article for that particular route
 * / page.
 * @field interpretedRoute {string} - how our custom scripting is expected to interpret the
 * route.
 * @field [roles] {array} - What user roles are allowed to access this route. If empty, any user
 * is allowed to access this route.
 * @field meAccess {boolean} - If true, then in addition to the user roles that are allowed to
 * access this route, the current user (aka 'me') is also allowed to access this route for their own
 * particular content.
 * @return routes {object} - metadata about all app routes / routing.
 */
export default {
  allIds: [
    'admin',
    'admin/dispositions',
    'admin/dispositions/new',
    'admin/dispositions/:dispositionId',
    'admin/fields',
    'admin/fields/new',
    'admin/fields/:fieldId',
    'admin/funnels',
    'admin/funnels/new',
    'admin/funnels/:funnelId',
    'admin/inquiry-form',
    'admin/programs',
    'admin/programs/new',
    'admin/programs/:programId',
    'admin/schools',
    'admin/schools/new',
    'admin/schools/:schoolId',
    'admin/statuses',
    'admin/statuses/new',
    'admin/statuses/:statusId',
    'admin/terms',
    'admin/terms/new',
    'admin/terms/:termId',
    'campaigns',
    'campaigns/new',
    'campaigns/:campaignId',
    'campaigns/report/:startDate/:endDate',
    'emails/triggered-emails',
    'error',
    'inquiries/duplicate-imports/:importId',
    'inquiries/duplicates/:inquiryId',
    'inquiries/:startDate/:endDate',
    'not-found',
    'programs/:programId',
    'programs/:programId/:termId',
    'prospects',
    'prospects/new',
    'prospects/:prospectId',
    'prospects/:prospectId/history',
    'prospects/:prospectId/projections',
    'upcoming-terms',
    'upload/goals',
    'upload/spend',
    'user-settings',
    'users/activity/:startDate/:endDate',
    'users/call-log/:startDate/:endDate',
    'users/email-log/:startDate/:endDate',
    'users/:userId',
  ],
  byId: {
    admin: {
      interpretedRoute: 'admin',
      roles: ['admin'],
    },
    'admin/dispositions': {
      interpretedRoute: 'admin/string',
      roles: ['admin'],
    },
    'admin/dispositions/:dispositionId': {
      interpretedRoute: 'admin/string/id',
      roles: ['admin'],
    },
    'admin/dispositions/new': {
      interpretedRoute: 'admin/string/new',
      roles: ['admin'],
    },
    'admin/fields': {
      interpretedRoute: 'admin/string',
      roles: ['admin'],
    },
    'admin/fields/:fieldId': {
      interpretedRoute: 'admin/string/id',
      roles: ['admin'],
    },
    'admin/fields/new': {
      roles: ['admin'],
      interpretedRoute: 'admin/string/new',
    },
    'admin/funnels': {
      interpretedRoute: 'admin/string',
      roles: ['admin'],
    },
    'admin/funnels/:funnelId': {
      interpretedRoute: 'admin/string/id',
      roles: ['admin'],
    },
    'admin/funnels/new': {
      interpretedRoute: 'admin/string/new',
      roles: ['admin'],
    },
    'admin/inquiry-form': {
      interpretedRoute: 'admin/string',
      roles: ['admin'],
    },
    'admin/programs': {
      interpretedRoute: 'admin/programs',
      roles: ['admin'],
    },
    'admin/programs/:programId': {
      interpretedRoute: 'admin/programs/id',
      roles: ['admin'],
    },
    'admin/programs/new': {
      interpretedRoute: 'admin/programs/new',
      roles: ['admin'],
    },
    'admin/schools': {
      interpretedRoute: 'admin/string',
      roles: ['admin'],
    },
    'admin/schools/:schoolId': {
      interpretedRoute: 'admin/string/id',
      roles: ['admin'],
    },
    'admin/schools/new': {
      interpretedRoute: 'admin/string/new',
      roles: ['admin'],
    },
    'admin/statuses': {
      interpretedRoute: 'admin/string',
      roles: ['admin'],
    },
    'admin/statuses/:statusId': {
      interpretedRoute: 'admin/string/id',
      roles: ['admin'],
    },
    'admin/statuses/new': {
      interpretedRoute: 'admin/string/new',
      roles: ['admin'],
    },
    'admin/terms': {
      interpretedRoute: 'admin/string',
      roles: ['admin'],
    },
    'admin/terms/:termId': {
      interpretedRoute: 'admin/string/id',
      roles: ['admin'],
    },
    'admin/terms/new': {
      interpretedRoute: 'admin/string/new',
      roles: ['admin'],
    },
    campaigns: {
      interpretedRoute: 'campaigns',
      roles: ['marketing'],
    },
    'campaigns/:campaignId': {
      happyFoxLink: 'https://allcampus.happyfox.com/kb/article/6-campaign-report',
      interpretedRoute: 'campaigns/id',
      roles: ['marketing'],
    },
    'campaigns/new': {
      interpretedRoute: 'campaigns/new',
      roles: ['marketing'],
    },
    'campaigns/report/:startDate/:endDate': {
      happyFoxLink: 'https://allcampus.happyfox.com/kb/article/2-campaigns-report',
      interpretedRoute: 'campaigns/report/date/date',
      roles: ['marketing'],
    },
    'emails/triggered-emails': {
      interpretedRoute: 'emails/triggered-emails',
      roles: [],
    },
    error: {
      interpretedRoute: 'error',
      roles: [],
    },
    'inquiries/:startDate/:endDate': {
      interpretedRoute: 'inquiries/date/date',
      roles: [],
    },
    'inquiries/duplicate-imports/:importId': {
      interpretedRoute: 'inquiries/duplicate-imports/id',
      roles: [],
    },
    'inquiries/duplicates/:inquiryId': {
      interpretedRoute: 'inquiries/duplicates/id',
      roles: [],
    },
    'not-found': {
      interpretedRoute: 'not-found',
      roles: [],
    },
    'programs/:programId': {
      happyFoxLink: 'https://allcampus.happyfox.com/kb/article/8-program-view',
      interpretedRoute: 'programs/string',
      roles: [],
    },
    'programs/:programId/:termId': {
      happyFoxLink: 'https://allcampus.happyfox.com/kb/article/9-term-pipeline-view',
      interpretedRoute: 'programs/string/date',
      roles: [],
    },
    prospects: {
      interpretedRoute: 'prospects',
      roles: [],
    },
    'prospects/new': {
      interpretedRoute: 'prospects/new',
      roles: [],
    },
    'prospects/:prospectId': {
      interpretedRoute: 'prospects/id',
      roles: [],
    },
    'prospects/:prospectId/history': {
      interpretedRoute: 'prospects/id/string',
      roles: [],
    },
    'prospects/:prospectId/projections': {
      interpretedRoute: 'prospects/id/string',
      roles: [],
    },
    'upcoming-terms': {
      interpretedRoute: 'upcoming-terms',
      roles: [],
    },
    'upload/goals': {
      interpretedRoute: 'upload/goals',
      roles: ['manager'],
    },
    'upload/spend': {
      interpretedRoute: 'upload/spend',
      roles: ['marketing'],
    },
    'user-settings': {
      interpretedRoute: 'user-settings',
      roles: [],
    },
    'users/:userId': {
      happyFoxLink: 'https://allcampus.happyfox.com/kb/article/7-advisor-activity-report',
      interpretedRoute: 'users/id',
      meAccess: true,
      roles: ['manager'],
    },
    'users/activity/:startDate/:endDate': {
      happyFoxLink: 'https://allcampus.happyfox.com/kb/article/3-advisor-activity-summary',
      interpretedRoute: 'users/activity/date/date',
      roles: ['manager'],
    },
    'users/call-log/:startDate/:endDate': {
      interpretedRoute: 'users/call-log/date/date',
      roles: [],
    },
    'users/email-log/:startDate/:endDate': {
      interpretedRoute: 'users/email-log/date/date',
      roles: [],
    },
  },
};
