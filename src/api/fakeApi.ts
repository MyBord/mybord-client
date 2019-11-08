// source: https://reactjs.org/docs/concurrent-mode-suspense.html#what-is-suspense-exactly
// source: https://codesandbox.io/s/frosty-hermann-bztrp

import videos from 'static/videos';

interface Data {
  data: any;
}

interface Wrapper {
  read(): Data;
}

const timeout = 1000;

const wrapPromise = (promise: Promise<Data>): Wrapper => {
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

const sampleFetch = (): Promise<Data> => new Promise((resolve) => {
  setTimeout(() => {
    resolve({
      data: true,
    });
  }, timeout);
});

const getVideos = (): Promise<Data> => new Promise((resolve) => {
  setTimeout(() => {
    resolve({
      data: videos,
    });
  }, timeout);
});

const fakeApi = {
  sampleData: wrapPromise(sampleFetch()),
  videos: wrapPromise(getVideos()),
};

export default fakeApi;
