import { cloneDeep } from 'lodash';
import { CommonObject } from 'types/commonTypes';

const stripProp = (object: CommonObject): void => {
  Object.keys(object).forEach((id) => {
    if (id.startsWith('__')) {
      // eslint-disable-next-line no-param-reassign
      delete object[id];
    } else if (typeof object[id] === 'object') {
      stripProp(object[id]);
    }
  });
};

export default (object: CommonObject): string => {
  const clonedObject = cloneDeep(object);
  stripProp(clonedObject);
  return JSON.stringify(clonedObject);
};
