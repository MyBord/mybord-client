import { TagColors } from 'types/colorTypes';

export interface UserCardTags {
  ellipsis: {
    color: TagColors;
    show: boolean;
  };
  tags: {
    color: TagColors;
    label: string;
    show: boolean;
  }[];
  totalLength: number;
}

type TagLengths = {
  label: string;
  length: number;
}[];

// the amount of pixels each letter takes up
const letterPixels: Record<string, number> = {
  a: 8,
  b: 8,
  c: 8,
  d: 8,
  e: 8,
  f: 6,
  g: 8,
  h: 8,
  i: 4,
  j: 6,
  k: 8,
  l: 4,
  m: 12,
  n: 8,
  o: 8,
  p: 9,
  q: 9,
  r: 6,
  s: 8,
  t: 6,
  u: 8,
  v: 8,
  w: 12,
  x: 8,
  y: 8,
  z: 8,
  A: 10,
  B: 10,
  C: 10,
  D: 10,
  E: 8,
  F: 8,
  G: 10,
  H: 10,
  I: 4,
  J: 6,
  K: 10,
  L: 8,
  M: 12,
  N: 10,
  O: 10,
  P: 10,
  Q: 10,
  R: 10,
  S: 8,
  T: 10,
  U: 10,
  V: 10,
  W: 12,
  X: 10,
  Y: 10,
  Z: 10,
  ' ': 6,
  0: 8,
  1: 6,
  2: 8,
  3: 8,
  4: 8,
  5: 8,
  6: 8,
  7: 8,
  8: 8,
  9: 8,
};

const getTagLength = (tag: string): number => tag
  .split('')
  .map((letter) => letterPixels[letter])
  // 20 refers to the total pixel padding for the left and right side combined
  .reduce((a, b) => a + b, 20);

const getFinalTagLength = (
  tag: { label: string; length: number },
  index: number,
  nTags: number,
): number => {
  // Do not count the padding for the first of last tag (we will count the padding on the
  // ellipsis tag, not the last tag)
  if (index !== 0 && index !== nTags - 1) {
    // 4 refers to the pixels between each tag
    return tag.length + 4;
  }

  return tag.length;
};

const getTotalTagLength = (tagLengths: TagLengths): number => {
  let totalLength = 0;

  tagLengths.forEach((tag, index) => {
    const finalTagLength = getFinalTagLength(tag, index, tagLengths.length);
    totalLength += finalTagLength;
  });

  return totalLength;
};

const getTagColor = (n: number): TagColors => {
  switch (n % 4) {
    case 0:
      return 'purple';
    case 1:
      return 'pink';
    case 2:
      return 'yellow';
    case 3:
      return 'blue';
    default:
      throw Error;
  }
};

// Returns the list of final tags to be shown in the card, along with whether or not the
// ellipsis should be shown
export default (tags: string[]) => {
  const tagLengths: TagLengths = tags.map((tag) => ({ label: tag, length: getTagLength(tag) }));
  const nTags = tagLengths.length;

  const userCardTags: UserCardTags = {
    totalLength: 0,
    tags: [],
    ellipsis: {
      color: null,
      show: false,
    },
  };

  const totalLength = getTotalTagLength(tagLengths);

  tagLengths.forEach((tag, index) => {
    // 204 is the total width that can contain the tags
    // 40 = 36px width of ellipsis + 4px margin
    // 164 = 204 - 40

    const finalTagLength = getFinalTagLength(tag, index, nTags);
    const tagColor = getTagColor(index);

    if (totalLength <= 204) {
      userCardTags.totalLength += finalTagLength;
      userCardTags.tags.push({
        color: tagColor,
        label: tag.label,
        show: true,
      });
    } else if (userCardTags.totalLength + finalTagLength < 164 && !userCardTags.ellipsis.show) {
      userCardTags.totalLength += finalTagLength;
      userCardTags.tags.push({
        color: tagColor,
        label: tag.label,
        show: true,
      });
    } else if (userCardTags.totalLength + finalTagLength >= 164 && !userCardTags.ellipsis.show) {
      userCardTags.ellipsis.color = tagColor;
      userCardTags.ellipsis.show = true;
      userCardTags.tags.push({
        color: tagColor,
        label: tag.label,
        show: false,
      });
    }
  });

  return userCardTags;
};
