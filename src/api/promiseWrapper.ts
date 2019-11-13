// source: https://reactjs.org/docs/concurrent-mode-suspense.html#what-is-suspense-exactly
// source: https://codesandbox.io/s/frosty-hermann-bztrp

interface Data {
  data: any;
}

interface Wrapper {
  read(): Data;
}

export default (promise: Promise<Data>): Wrapper => {
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
