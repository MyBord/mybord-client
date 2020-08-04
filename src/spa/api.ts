import axios from 'axios';
import promiseWrapper, { PromiseWrapper } from './promiseWrapper';

export interface Resource<T> {
  data: PromiseWrapper<T>;
}

const get = (gqlString: any): Promise<any> => new Promise((resolve) => {
  const body = JSON.stringify({ query: gqlString.loc.source.body });
  const config = {
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
  };
  axios.post(`http://${process.env.URI}`, body, config)
    .then((response) => resolve(response.data.data));
});

const query = (gqlString: any): Resource<any> => {
  const promise = get(gqlString);
  return {
    data: promiseWrapper(promise),
  };
};

export default {
  query,
};
