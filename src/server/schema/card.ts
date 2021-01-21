import gql from 'graphql-tag';
import { YoutubeVideoData } from 'types/youtubeTypes';

// ----- MUTATIONS ----- //

export const CREATE_USER_CARD_MUTATION = gql`
  mutation createUserCard(
    $category: CardCategory!
    $isFavorite: Boolean!
    $isToDo: Boolean!
    $title: String!
    $url: String!
  ) {
    createUserCard(data: {
      category: $category
      isFavorite: $isFavorite
      isToDo: $isToDo
      title: $title
      url: $url
    }) {
      id
      type
      cardData{
        gifCardData{
          gifUrl
        }
        imageCardData{
          imageUrl
        }
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

export const INITIATE_USER_CARD_MUTATION = gql`
  mutation initiateUserCard($url: String!) {
    initiateUserCard(data: {url: $url}) {
      category
      title
      type
      url
      cardData {
        gifCardData{
          gifUrl
        }
        imageCardData{
          imageUrl
        }
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
      category
      isFavorite
      isToDo
      title
      type
      cardData{
        gifCardData{
          gifUrl
        }
        imageCardData{
          imageUrl
        }
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
  query userCardsWithFilters(
    $categories: [CardCategory]!
    $isFavorite: Boolean!,
    $isToDo: Boolean!
  ){
    userCardsWithFilters(data: {
      categories: $categories,
      isFavorite: $isFavorite,
      isToDo: $isToDo
    }){
      id
      category
      isFavorite
      isToDo
      title
      type
      cardData{
        gifCardData{
          gifUrl
        }
        imageCardData{
          imageUrl
        }
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
      category
      isFavorite
      isToDo
      title
      type
      cardData{
        gifCardData{
          gifUrl
        }
        imageCardData{
          imageUrl
        }
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
        categories
        isFavorite
        isToDo
      }
      userCards {
        id
        category
        isFavorite
        isToDo
        title
        type
        cardData{
          gifCardData{
            gifUrl
          }
          imageCardData{
            imageUrl
          }
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

// ----- RESPONSE INTERFACES && TYPES ----- //

export interface CardData {
  gifCardData?: {
    gifUrl: string;
  };
  imageCardData?: {
    imageUrl: string;
  };
  youtubeCardData?: YoutubeVideoData;
}

export type CardCategory = 'Gif' | 'Image' | 'Video';

export type CardType = 'Gif' | 'Image' | 'Youtube';

export interface UserCardData {
  id: string;
  cardData: CardData;
  category: CardCategory;
  isFavorite: boolean;
  isToDo: boolean;
  subtitle: string;
  tags: string[];
  title: string;
  type: CardType;
}

export interface UserCardsQueryResponse {
  userCards: UserCardData[];
}
