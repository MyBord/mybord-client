import { UserCardData } from 'schema/card';

const defaultData: UserCardData = {
  id: '1',
  cardData: null,
  category: 'Video',
  isFavorite: false,
  isToDo: false,
  subtitle: 'Augue at ut arcu risus euismod morbi blandit non facilisi.',
  tags: ['lorem', 'dolor', 'elit', 'consectetur', 'adipiscing', 'amet', 'blandit'],
  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  type: 'Youtube',
};

const isFavorite: UserCardData = {
  ...defaultData,
  isFavorite: true,
};

const isToDo: UserCardData = {
  ...defaultData,
  isToDo: true,
};

const longTitle: UserCardData = {
  ...defaultData,
  subtitle: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu'
  + ' fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui'
  + ' officia deserunt mollit anim id est laborum.',
  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
  + ' ut labore et dolore magna aliqua.',
};

const noTags: UserCardData = {
  ...defaultData,
  tags: [],
};

const someTags: UserCardData = {
  ...defaultData,
  tags: ['abc', 'd', 'e', 'f', 'xyz'],
};

export default {
  defaultData,
  isFavorite,
  isToDo,
  longTitle,
  noTags,
  someTags,
};
