import gapi from 'gapi/gapi';
import { PromiseWrapper, promiseWrapper } from './promiseWrapper';

export interface Resource {
  [key: string]: PromiseWrapper;
}

const getYoutubeVideoData = (videoId: string): Resource => {
  const youtubeVideoDataPromise = gapi.getYoutubeVideoData(videoId);
  return {
    youtubeVideoData: promiseWrapper(youtubeVideoDataPromise),
  };
};

export default {
  getYoutubeVideoData,
};
