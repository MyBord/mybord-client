import axios from 'axios';
import promiseWrapper, { PromiseWrapper } from 'api/promiseWrapper';
import { GqlString } from 'types/gqlTypes';

export interface Resource<T> {
  data: PromiseWrapper<T>;
}

const get = (gqlString: GqlString): Promise<any> => new Promise((resolve) => {
  const body = JSON.stringify({ query: gqlString.loc.source.body });
  const config = {
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
  };
  axios.post(`http://${process.env.URI}`, body, config)
    .then((response) => resolve(response.data.data));
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
