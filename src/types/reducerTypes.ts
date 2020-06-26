import { UserCard } from 'schema/card';

export type AllIds = (number | string)[];

export type ById = {
  [key in number | string]: {
    [key in number | string]: any;
  };
};

export type AllIdsCards = string[];

export type ByIdCards = { [key in string]: UserCard; };
