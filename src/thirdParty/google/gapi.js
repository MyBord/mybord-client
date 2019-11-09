/* eslint-disable */
const apiKey = 'AIzaSyBIhWyxFlyRLx3uoHAuc53aQ9M-_eXcm-w';
const clientId = '901995155926-4q2gfmu5p72lsvv1c7uq9noi1sjgldkr.apps.googleusercontent.com';

const authenticate = async () => {
  const { gapi } = window;
  return gapi.load('client:auth2', async () => {
    try {
      await gapi.auth2.init({ clientId: this.clientId });
      gapi.client.setApiKey(this.apiKey);
      await gapi.client.load('https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest');
      console.log('loaded');
    } catch (error) {
      throw Error(`Error authenticating gapi client: ${error}`);
    }
  });
}

const loadYoutubeApi => async () => {
  this.gapi.client.setApiKey(this.apiKey);
  try {
    return await this.gapi.client
      .load('https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest');
  } catch (error) {
    throw Error(`Error loading youtube gapi client: ${error}`);
  }
}

async execute() {
  const { gapi } = window;
  try {
    const response = await gapi.client.youtube.videos.list({
      'part': 'snippet,contentDetails,statistics',
      'id': '6-8k-o_ofDw',
    });
    console.log('RESPONSE:');
    console.log(response);
  } catch (error) {
    throw Error(`Error loading youtube video api: ${error}`);
  }
}
