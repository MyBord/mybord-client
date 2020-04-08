export default (error: any): { message: string; status: number } => {
  const { exception } = error.graphQLErrors[0].extensions;
  return {
    message: exception.message,
    status: exception.status,
  };
};
