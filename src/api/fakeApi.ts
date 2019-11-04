// source: https://reactjs.org/docs/concurrent-mode-suspense.html#what-is-suspense-exactly
// source: https://codesandbox.io/s/frosty-hermann-bztrp

const wrapPromise = (promise: Promise<object>): { read(): object } => {
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

const sampleFetch = (): Promise<object> => new Promise((resolve) => {
  setTimeout(() => {
    resolve({
      data: true,
    });
  }, 3000);
});

export default {
  sampleData: wrapPromise(sampleFetch()),
};
