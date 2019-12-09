import schemaMutations from './schema/schemaMutations';
import schemaQueries from './schema/schemaQueries';
import schemaResolvers from './schema/schemaResolvers';

export default {
  Mutation: {
    ...schemaMutations,
  },
  Query: {
    ...schemaQueries,
  },
  ...schemaResolvers,
};
