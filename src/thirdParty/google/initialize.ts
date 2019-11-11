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

export default (): void => {
  window.gapi.load('client:auth2', async () => {
    try {
      await authenticate();
      await loadYoutubeApi();
    } catch (error) {
      throw Error(`Error initializing gapi client: ${error}`);
    }
  });
};