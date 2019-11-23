export interface PromiseWrapper {
  read(): {
    data: any;
  };
}

export const promiseWrapper = (promise: Promise<any>): PromiseWrapper => {
  let status = 'pending';
  let result: object;
  const suspender = promise.then(
    (r) => {
      status = 'success';
      result = r;
    },
    (e) => {
      status = 'error';
      result = e;
    },
  );
  return {
    // @ts-ignore
    // eslint-disable-next-line consistent-return
    read() {
      if (status === 'pending') {
        throw suspender;
      } else if (status === 'error') {
        throw result;
      } else if (status === 'success') {
        return result;
      }
    },
  };
};
