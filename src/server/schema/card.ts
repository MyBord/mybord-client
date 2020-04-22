import gql from 'graphql-tag';

export const CREATE_YOUTUBE_CARD = gql`
  mutation createYoutubeCard($videoId: String!) {
    createYoutubeCard(data: {videoId: $videoId}) {
      id
    }
  }
`;
