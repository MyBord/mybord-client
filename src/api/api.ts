import axios from 'axios';
import promiseWrapper, { PromiseWrapper } from 'api/promiseWrapper';
import { GqlString } from 'types/gqlTypes';

export interface Resource<T> {
  data: PromiseWrapper<T>;
}

const get = (gqlString: GqlString): Promise<any> => new Promise((resolve) => {
  setTimeout(() => {
    const body = JSON.stringify({ query: gqlString.loc.source.body });
    const config = {
      headers: { 'Content-Type': 'application/json' },
    };
    axios.post(`http://${process.env.URI}`, body, config)
      .then((response) => resolve(response.data.data));
  }, 2000);
});

const query = (gqlString: GqlString): Resource<any> => {
  const promise = get(gqlString);
  return {
    data: promiseWrapper(promise),
  };
};

export default {
  query,
};
