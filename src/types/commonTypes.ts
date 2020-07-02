export type CommonObject = {
  [key in number | string]: any;
};

// Source: https://stackoverflow.com/a/52490977/7460467
// Defines a Tuple of a given length
export type Tuple<TItem, TLength extends number> = [TItem, ...TItem[]] & { length: TLength };
