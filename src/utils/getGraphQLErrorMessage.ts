export default (errorMessage: string): string => errorMessage.substring('GraphQL error: '.length);
