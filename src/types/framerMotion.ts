export type Variants = {
  [key in string]: {
    initial: {
      opacity: number;
    };
    enter?: {
      opacity: number;
      transition: {
        duration: number;
      };
    };
    exit?: {
      opacity: number;
      transition: {
        duration: number;
      };
    };
  };
};
