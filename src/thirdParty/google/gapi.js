/* eslint-disable */
export default () => {
  const { gapi } = window;
  function authenticate() {
    console.log('^^^^^^^');
    console.log(gapi.auth2);
    console.log(gapi.auth2.getAuthInstance);
    console.log(gapi.auth2.getAuthInstance());
    return gapi.auth2.getAuthInstance()
      .signIn({scope: "https://www.googleapis.com/auth/youtube.readonly"})
      .then(function() { console.log("Sign-in successful"); },
        function(err) { console.error("Error signing in", err); });
  }

  function execute() {
    console.log('*************');
    console.log(gapi.client.youtube.videos.list);
    return gapi.client.youtube.videos.list({
      part: 'snippet,contentDetails,statistics',
      id: 'hIkIanWUGcc',
    })
      .then((response) => {
          // Handle the results here (response.result has the parsed body).
          console.log('Response', response);
        },
        (err) => { console.error('Execute error', err); });
  }

  function loadClient() {
    return gapi.client.load('https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest')
      .then(() => {
        console.log('GAPI client loaded for API');
        console.log(gapi.client.youtube);
        execute();
      },
        (err) => { console.error('Error loading GAPI client for API', err); });
  }
  gapi.load("client:auth2", function() {
    gapi.auth2.init(
      {'client_id': '901995155926-atkia248k99p8qka20m00ljmfpqo68fj.apps.googleusercontent.com'}
    );
  });
  // gapi.load('client', () => {
  //   gapi.client.setApiKey('AIzaSyBIhWyxFlyRLx3uoHAuc53aQ9M-_eXcm-w');
  //   gapi.client.load('client:auth2', 'v3', () => {
  //     authenticate();
  //     console.log('gapi is ready');
  //     console.log(gapi.client);
  //     console.log(gapi.client.youtube);
  //     loadClient();
  //     // execute();
  //   });
  // });
};
