import mutations from './mutations';
import queries from './queries';
import subscriptions from './subscriptions';

export default {
  Mutation: {
    ...mutations,
  },
  Query: {
    ...queries,
    foo: () => 'foo query',
    bar: () => 'bar query',
  },
  Subscription: {
    ...subscriptions,
  },
  Node: {
    __resolveType() { // https://github.com/apollographql/apollo-server/issues/1075
      return null;
    },
  },
};
