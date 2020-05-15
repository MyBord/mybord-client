/* eslint-disable */
import axios from 'axios';
import { GET_USER_CARDS } from 'schema/card';
import promiseWrapper from 'api/promiseWrapperTwo';
import { GqlString } from 'types/gqlTypes';

const fetchUserCards = (gqlString) => new Promise((resolve) => {
  setTimeout(() => {
    const body = JSON.stringify({ query: gqlString.loc.source.body });
    const config = {
      headers: { 'Content-Type': 'application/json' },
    };
    axios.post(process.env.URI, body, config)
      .then((response) => resolve(response.data.data));
  }, 2000);
});

// eslint-disable-next-line import/prefer-default-export
export function fetchData(gqlString) {
  const userCardsPromise = fetchUserCards(gqlString);
  return {
    userCards: promiseWrapper(userCardsPromise),
  };
}
