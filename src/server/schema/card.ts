import gql from 'graphql-tag';
import { YoutubeVideoData } from 'types/youtubeTypes';

// ----- RESOLVERS ----- //

export const CREATE_YOUTUBE_CARD = gql`
  mutation createYoutubeCard($videoId: String!) {
    createYoutubeCard(data: {videoId: $videoId}) {
      id
    }
  }
`;

export const GET_USER_CARDS = gql`
  query {
    userCards{
      type
      cardData{
        youtubeCardData{
          channelThumbnail
          channelTitle
          duration
          likes
          publishedAt
          videoId
          videoThumbnail
          videoTitle
          views
        }
      }
    } 
  }
`;

// ----- RESPONSE INTERFACES ----- //

export interface UserCard {
  type: string;
  cardData: {
    youtubeCardData: YoutubeVideoData;
  };
}

export interface GetUserCardsResponse {
  userCards: UserCard[];
}
