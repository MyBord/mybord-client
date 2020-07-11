import * as React from 'react';
import stringify from 'utils/stringify';
import { Props } from './card';

const memoCard = (Component: React.FC<Props>): React.FC<Props> => React.memo(
  Component,
  (prevProps: Props, nextProps: Props) => {
    console.log('-----');
    console.log('-----88888');
    console.log(prevProps);
    console.log(nextProps);
    return (
      stringify(prevProps.userCard) === stringify(nextProps.userCard)
    );
  },
);

export default memoCard;
