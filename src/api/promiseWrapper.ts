export interface PromiseWrapper<T> {
  read(): T;
}

export const promiseWrapper = <T>(promise: Promise<T>): PromiseWrapper<T> => {
  let status = 'pending';
  let result: T;
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
