import gapi from 'gapi/gapi';
import { YoutubeData } from 'types/youtubeTypes';
import { PromiseWrapper, promiseWrapper } from './promiseWrapper';

export interface Resource<T> {
  [key: string]: PromiseWrapper<T>;
}

const getYoutubeVideoData = (videoId: string): Resource<YoutubeData> => {
  const youtubeVideoDataPromise = gapi.getYoutubeVideoData(videoId);
  return {
    youtubeVideoData: promiseWrapper(youtubeVideoDataPromise),
  };
};

export default {
  getYoutubeVideoData,
};
