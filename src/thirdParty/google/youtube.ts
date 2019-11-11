import { VideoData } from 'types/videoTypes';
import { formatDuration, formatNumber, formatPublishedAt } from './utils';

declare global {
  interface Window {
    gapi: any;
  }
}

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
      duration: formatDuration(contentDetails.duration),
      likes: formatNumber(statistics.likeCount),
      publishedAt: formatPublishedAt(snippet.publishedAt),
      videoThumbnail: snippet.thumbnails.medium.url,
      videoTitle: snippet.title,
      views: formatNumber(statistics.viewCount),
    };
  } catch (error) {
    throw Error(`Error loading youtube video api: ${error}`);
  }
};

export default getVideoData;
