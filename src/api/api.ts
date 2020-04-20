import axios from 'axios';
import gql from 'graphql-tag';
import gapi from 'gapi/gapi';
import { GqlString } from 'types/gqlTypes';
import { YoutubeData } from 'types/youtubeTypes';
import { PromiseWrapper, promiseWrapper } from './promiseWrapper';

export const Foo = gql`
  query {
    foo {
      name
      state
    }
  }
`;

export interface Resource<T> { // ToDo: remove
  [key: string]: PromiseWrapper<T>;
}

const query = async (gqlString: GqlString): Promise<void> => {
  try {
    const body = JSON.stringify({ query: gqlString.loc.source.body });
    const config = {
      headers: { 'Content-Type': 'application/json' },
    };
    const response = await axios.post(process.env.URI, body, config);
    console.log(response.data.data);
  } catch (error) {
    throw Error(error);
  }
};

const getYoutubeVideoData = (videoId: string): Resource<YoutubeData> => {
  const youtubeVideoDataPromise = gapi.getYoutubeVideoData(videoId);
  return {
    youtubeVideoData: promiseWrapper(youtubeVideoDataPromise),
  };
};

export default {
  getYoutubeVideoData,
  query,
};
