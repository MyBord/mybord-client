// source: https://reactjs.org/docs/concurrent-mode-suspense.html#what-is-suspense-exactly
// source: https://codesandbox.io/s/frosty-hermann-bztrp

import axios from 'axios';
import gapi from 'gapi/gapi';
import promiseWrapper from './promiseWrapper';

const timeout = 1000;

const fetchPerson = async (): Promise<string> => {
  try {
    const response = await axios.get('https://randomuser.me/api');
    const { name } = response.data.results[0];
    return `${name.title} ${name.first} ${name.last}`;
  } catch (error) {
    throw Error('error with fetch person');
  }
};

const foo = async (): Promise<object> => {
  try {
    const bar = await gapi.getYoutubeData('kJQP7kiw5Fk');
    return bar;
  } catch (error) {
    // throw Error(`Error with getYoutubeData api: ${error}`);
    throw Error(error);
  }
};

export default () => ({
  // @ts-ignore
  person: promiseWrapper(fetchPerson()),
  // @ts-ignore
  video: promiseWrapper(foo()),
});

// todo: rename to api resource?
