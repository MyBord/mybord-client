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

export default (object: CommonObject): CommonObject | string => {
  const clonedObject = cloneDeep(object);
  if (clonedObject !== null) {
    stripProp(clonedObject);
    return JSON.stringify(clonedObject);
  }

  return clonedObject;
};
