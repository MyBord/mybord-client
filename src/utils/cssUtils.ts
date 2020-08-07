// get the numerical unit from a given string, e.g. "24px" => 24
export const getUnit = (string: string, unit: string): number => Number(string.split(unit)[0]);

// converts numerical value to a string unit, e.g. 24 => "24px"
export const makeUnit = (value: number, unit: string): string => `${value}${unit}`;
