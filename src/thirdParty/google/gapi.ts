import { VideoData } from 'types/videoTypes';

declare global {
  interface Window {
    gapi: any;
  }
}

const authenticate = async (): Promise<void> => {
  try {
    await window.gapi.auth2.init({ clientId: process.env.GAPI_CLIENT_ID });
  } catch (error) {
    throw Error(`Error authenticating gapi client: ${error}`);
  }
};

const loadYoutubeApi = async (): Promise<void> => {
  window.gapi.client.setApiKey(process.env.GAPI_KEY);
  try {
    await window.gapi.client.load('https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest');
  } catch (error) {
    throw Error(`Error loading youtube gapi client: ${error}`);
  }
};

const initialize = (): void => {
  window.gapi.load('client:auth2', async () => {
    try {
      await authenticate();
      await loadYoutubeApi();
    } catch (error) {
      throw Error(`Error initializing gapi client: ${error}`);
    }
  });
};

const getChannelData = async (channelId: string): Promise<string> => {
  try {
    const channelResponse = await window.gapi.client.youtube.channels.list({
      part: 'snippet',
      id: channelId,
    });
    return channelResponse.result.items[0].snippet.thumbnails.medium.url;
  } catch (error) {
    throw Error(`Error loading youtube channel api: ${error}`);
  }
};

const getVideoData = async (videoId: string): Promise<VideoData> => {
  try {
    const videoResponse = await window.gapi.client.youtube.videos.list({
      part: 'contentDetails,snippet,statistics',
      id: videoId,
    });
    const { contentDetails, snippet, statistics } = videoResponse.result.items[0];
    const channelThumbnail = await getChannelData(snippet.channelId);
    return {
      channelThumbnail,
      channelTitle: snippet.channelTitle,
      duration: contentDetails.duration,
      likes: statistics.likeCount,
      publishedAt: snippet.publishedAt,
      videoThumbnail: snippet.thumbnails.medium.url,
      videoTitle: snippet.title,
      views: statistics.viewCount,
    };
  } catch (error) {
    throw Error(`Error loading youtube video api: ${error}`);
  }
};

export default {
  getVideoData,
  initialize,
};
