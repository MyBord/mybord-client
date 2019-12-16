import mutations from './schema/mutations';
import queries from './schema/queries';
import resolvers from './schema/resolvers';
import subscriptions from './schema/subscriptions';

export default {
  Mutation: {
    ...mutations,
  },
  Query: {
    ...queries,
  },
  Subscription: {
    ...subscriptions,
  },
  ...resolvers,
};
