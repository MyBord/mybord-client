import gapi from 'gapi/gapi';
import promiseWrapper from './promiseWrapper';

const getYoutubeVideoData = (videoId) => {
  const youtubeVideoDataPromise = gapi.getYoutubeVideoData(videoId);
  return {
    youtubeVideoData: promiseWrapper(youtubeVideoDataPromise),
  };
};

export default {
  getYoutubeVideoData,
};
