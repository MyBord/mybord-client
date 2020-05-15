/* eslint-disable */
import axios from 'axios';
import promiseWrapper from 'api/promiseWrapper';

const get = (gqlString) => new Promise((resolve) => {
  setTimeout(() => {
    const body = JSON.stringify({ query: gqlString.loc.source.body });
    const config = {
      headers: { 'Content-Type': 'application/json' },
    };
    axios.post(process.env.URI, body, config)
      .then((response) => resolve(response.data.data));
  }, 2000);
});

const query  = (gqlString) => {
  const promise = get(gqlString);
  return {
    data: promiseWrapper(promise),
  };
}

export default {
  query,
}
