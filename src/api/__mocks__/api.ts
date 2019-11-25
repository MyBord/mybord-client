import youtubeVideoMockData from 'mockData/youtubeVideoMockData';
import { PromiseWrapper, promiseWrapper } from '../promiseWrapper';

export interface Resource {
  [key: string]: PromiseWrapper;
}

const timeout = 1000;

const getYoutubeVideoMockData = (): Promise<{ data: object }> => new Promise((resolve) => {
  setTimeout(() => {
    resolve({
      data: youtubeVideoMockData,
    });
  }, timeout);
});

const getYoutubeVideoData = (videoId: string): Resource => {
  const youtubeVideoDataPromise = getYoutubeVideoMockData();
  return {
    youtubeVideoData: promiseWrapper(youtubeVideoDataPromise),
  };
};

export default {
  getYoutubeVideoData,
};
