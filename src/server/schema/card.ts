import gql from 'graphql-tag';
import { YoutubeVideoData } from 'types/youtubeTypes';

// ----- MUTATIONS ----- //

export const CREATE_YOUTUBE_CARD_MUTATION = gql`
  mutation createYoutubeCard($videoUrl: String!) {
    createYoutubeCard(data: {videoUrl: $videoUrl}) {
      id
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

export const DELETE_USER_CARD_MUTATION = gql`
  mutation deleteUserCard($cardId: String!) {
    deleteUserCard(data: {cardId: $cardId}) {
      id
    }
  }
`;

export const INITIATE_YOUTUBE_CARD_MUTATION = gql`
  mutation initiateYoutubeCard($videoUrl: String!) {
    initiateYoutubeCard(data: {videoUrl: $videoUrl}) {
      category
      title
      url
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
`;

export const TOGGLE_FAVORITE_USER_CARD_MUTATION = gql`
  mutation toggleFavoriteUserCard($cardId: String!) {
    toggleFavoriteUserCard(data: {cardId: $cardId}) {
      id
      isFavorite
    }
  }
`;

export const TOGGLE_TO_DO_USER_CARD_MUTATION = gql`
  mutation toggleToDoUserCard($cardId: String!) {
    toggleToDoUserCard(data: {cardId: $cardId}) {
      id
      isToDo
    }
  }
`;

// ----- QUERIES ----- //

export const USER_CARDS_QUERY = gql`
  query {
    userCards{
      id
      isFavorite
      isToDo
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

export const USER_CARDS_WITH_FILTERS_QUERY = gql`
  query userCardsWithFilters($isFavorite: Boolean!, $isToDo: Boolean!){
    userCardsWithFilters(data: {isFavorite: $isFavorite, isToDo: $isToDo}){
      id
      isFavorite
      isToDo
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

// ----- SUBSCRIPTIONS ----- //

export const DELETED_USER_CARD_SUBSCRIPTION = gql`
  subscription deletedUserCard {
    deletedUserCard {
      id
    }
  }
`;

export const USER_CARD_SUBSCRIPTION = gql`
  subscription userCard {
    userCard {
      id
      isFavorite
      isToDo
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

export const FILTERED_USER_CARDS_SUBSCRIPTION = gql`
  subscription filteredUserCards {
    filteredUserCards {
      filters {
        isFavorite
        isToDo
      }
      userCards {
        id
        isFavorite
        isToDo
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
  }
`;

// ----- RESPONSE INTERFACES ----- //

export interface UserCard {
  id: string;
  isFavorite: boolean;
  isToDo: boolean;
  type: 'Youtube';
  cardData: {
    youtubeCardData: YoutubeVideoData;
  };
}

export interface UserCardsQueryResponse {
  userCards: UserCard[];
}
