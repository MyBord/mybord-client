type Unit = 'px' | 'rem';

// get the numerical unit from a given string, e.g. "24px" => 24
export const getUnit = (string: string, unit: Unit): number => Number(string.split(unit)[0]);

// converts numerical value to a string unit, e.g. 24 => "24px"
export const makeUnit = (value: number, unit: Unit): string => `${value}${unit}`;

// converts one string css unit to another
export const convertUnit = (string: string, currentUnit: Unit, nextUnit: Unit): string => {
  const clonedString = `${string}`;
  const value = Number(clonedString.replace(currentUnit, ''));

  if (currentUnit === 'rem' && nextUnit === 'px') {
    return makeUnit(value * 16, 'px');
  }

  if (currentUnit === 'px' && nextUnit === 'rem') {
    return makeUnit(value / 16, 'rem');
  }

  throw Error('Could not convert unit');
};
