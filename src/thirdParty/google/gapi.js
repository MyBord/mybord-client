const authenticate = async () => {
  const { gapi } = window;
  try {
    await gapi.auth2.init({ clientId: process.env.GAPI_CLIENT_ID });
  } catch (error) {
    throw Error(`Error authenticating gapi client: ${error}`);
  }
};

const loadYoutubeApi = async () => {
  const { gapi } = window;
  gapi.client.setApiKey(process.env.GAPI_KEY);
  try {
    await gapi.client.load('https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest');
  } catch (error) {
    throw Error(`Error loading youtube gapi client: ${error}`);
  }
};

const initialize = async () => {
  const { gapi } = window;
  await gapi.load('client:auth2', async () => {
    try {
      await authenticate();
      await loadYoutubeApi();
    } catch (error) {
      throw Error(`Error initializing gapi client: ${error}`);
    }
  });
};

const getVideoData = async (id) => {
  const { gapi } = window;
  try {
    const response = await gapi.client.youtube.videos.list({
      part: 'snippet,contentDetails,statistics',
      id,
    });
    return response;
  } catch (error) {
    throw Error(`Error loading youtube video api: ${error}`);
  }
};

export default {
  getVideoData,
  initialize,
};
