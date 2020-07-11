import * as React from 'react';
import stringify from 'utils/stringify';
import { Props } from './card';

const memoCard = (Component: React.FC<Props>): React.FC<Props> => React.memo(
  Component,
  (prevProps: Props, nextProps: Props) => {
    const finalPrevProps = { ...prevProps.userCard };
    const finalNextProps = { ...nextProps.userCard };
    delete finalPrevProps.isFavorite;
    delete finalPrevProps.isToDo;
    delete finalNextProps.isFavorite;
    delete finalNextProps.isToDo;
    return (
      stringify(finalPrevProps) === stringify(finalNextProps)
    );
  },
);

export default memoCard;
