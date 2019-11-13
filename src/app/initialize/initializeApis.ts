import api from 'api/api';

// api's that need to be invoked and returned before the application can be initialized.
export default () => {
  api.videos.read();
  api.gapi.read();
};
