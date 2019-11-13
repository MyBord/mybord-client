// source: https://reactjs.org/docs/concurrent-mode-suspense.html#what-is-suspense-exactly
// source: https://codesandbox.io/s/frosty-hermann-bztrp

import gapi from 'google/gapi';
import videos from 'static/videos';
import promiseWrapper from './promiseWrapper';

interface Data {
  data: any;
}

const timeout = 1000;

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

const api = {
  sampleData: promiseWrapper(sampleFetch()),
  videos: promiseWrapper(getVideos()),
  // @ts-ignore
  gapi: promiseWrapper(gapi.initialize()),
};

export default api;
