import mutations from './schema/mutations';
import queries from './schema/queries';
import resolvers from './schema/resolvers';

export default {
  Mutation: {
    ...mutations,
  },
  Query: {
    ...queries,
  },
  ...resolvers,
};
