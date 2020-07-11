export type AllIds = (number | string)[];

export type ById = {
  [key in number | string]: {
    [key in number | string]: any;
  };
};
