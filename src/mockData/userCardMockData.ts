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
  noTags,
  someTags,
};
