/* eslint-disable */
import axios from 'axios';
import { GET_USER_CARDS } from 'schema/card';
import promiseWrapper from 'api/promiseWrapperTwo';

const fetchUserCards = () => new Promise((resolve) => {
  setTimeout(() => {
    const body = JSON.stringify({ query: GET_USER_CARDS.loc.source.body });
    const config = {
      headers: { 'Content-Type': 'application/json' },
    };
    axios.post(process.env.URI, body, config)
      .then((response) => resolve(response.data.data));
  }, 2000);
});

// eslint-disable-next-line import/prefer-default-export
export function fetchData() {
  const userCardsPromise = fetchUserCards();
  return {
    userCards: promiseWrapper(userCardsPromise),
  };
}
