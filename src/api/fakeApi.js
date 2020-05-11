/* eslint-disable */
import axios from 'axios';
import { GET_USER_CARDS } from 'schema/card';

const wrapPromise = (promise) => {
  let status = 'pending';
  let result;
  const suspender = promise.then(
    (r) => {
      status = 'success';
      result = r;
    },
    (e) => {
      status = 'error';
      result = e;
    },
  );
  return {
    // eslint-disable-next-line consistent-return
    read() {
      if (status === 'pending') {
        throw suspender;
      } else if (status === 'error') {
        throw result;
      } else if (status === 'success') {
        return result;
      }
    },
  };
};

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
    userCards: wrapPromise(userCardsPromise),
  };
}
