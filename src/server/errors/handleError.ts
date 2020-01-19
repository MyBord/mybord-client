const handleError = (error: any): any => {
  const { exception } = error.graphQLErrors[0].extensions;
  return {
    message: exception.message,
    status: exception.status,
  };
};

export default handleError;
