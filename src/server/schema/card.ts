import { YoutubeVideoData } from 'types/youtubeTypes';

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
