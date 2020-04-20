// This defines the object that is defined by the 'graphql-tag' package when a string is
// wraped with 'graphql-tag', e.g.:
// const query = gql` query { foo { name } }`;
export interface GqlString {
  loc: {
    source: {
      body: string;
    };
  };
};
