import * as React from 'react';
import stringify from 'utils/stringify';
import { CommonObject } from 'types/commonTypes';

const memo = <Props extends object>(Component: React.FC<Props>): React.FC<Props> => React.memo(
  Component,
  (prevProps: CommonObject, nextProps: CommonObject) => Object.keys(prevProps).every((prop) => {
    if (typeof prevProps[prop] === 'object' && !['node'].includes(prop)) {
      return stringify(prevProps[prop]) === stringify(nextProps[prop]);
    }
    return prevProps[prop] === nextProps[prop];
  }),
);

export default memo;
