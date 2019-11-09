/* eslint-disable */

export default class GAPI {
  constructor() {
    this.apiKey = 'AIzaSyBIhWyxFlyRLx3uoHAuc53aQ9M-_eXcm-w';
    this.clientId = '901995155926-4q2gfmu5p72lsvv1c7uq9noi1sjgldkr.apps.googleusercontent.com';
    this.isInitialized = false;
  }

  async authenticate() {
    const { gapi } = window;
    try {
      await gapi.auth2.init({ clientId: this.clientId });
    } catch (error) {
      throw Error(`Error authenticating gapi client: ${error}`);
    }
  };

  async initialize () {
    const { gapi } = window;
    let foo = 'bar';
    await gapi.load('client:auth2', async () => {
      try {
        await this.authenticate();
        await this.loadYoutubeApi();
        this.isInitialized = true;
        console.log('&&&&&&&&&&');
        console.log(this.isInitialized);
        foo = 'tux';
      } catch (error) {
        throw Error(`Error initializing gapi client: ${error}`);
      }
    });
    return foo;
  };

  async loadYoutubeApi() {
    const { gapi } = window;
    gapi.client.setApiKey(this.apiKey);
    try {
      await gapi.client.load('https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest');
    } catch (error) {
      throw Error(`Error loading youtube gapi client: ${error}`);
    }
  };

  async getVideoData(id) {
    const { gapi } = window;
    try {
      const response = await gapi.client.youtube.videos.list({
        'part': 'snippet,contentDetails,statistics',
        id,
      });
      console.log('RESPONSE:');
      console.log(response);
    } catch (error) {
      throw Error(`Error loading youtube video api: ${error}`);
    }
  };
}
