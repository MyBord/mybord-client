const isInFilter = (info: {
  state: { isFavorite: boolean; isToDo: boolean };
  card: { isFavorite: boolean; isToDo: boolean};
}): boolean => true;

describe('no filters', () => {
  test('card is favorite', () => {
    const info = {
      state: { isFavorite: false, isToDo: false },
      card: { isFavorite: true, isToDo: false },
    };

    expect(isInFilter(info)).toBeTruthy();
  });

  test('card is to do', () => {
    const info = {
      state: { isFavorite: false, isToDo: false },
      card: { isFavorite: false, isToDo: true },
    };

    expect(isInFilter(info)).toBeTruthy();
  });

  test('card is both', () => {
    const info = {
      state: { isFavorite: false, isToDo: false },
      card: { isFavorite: true, isToDo: true },
    };

    expect(isInFilter(info)).toBeTruthy();
  });
});

describe('favorite filters', () => {
  test('card is favorite', () => {
    const info = {
      state: { isFavorite: true, isToDo: false },
      card: { isFavorite: true, isToDo: false },
    };

    expect(isInFilter(info)).toBeTruthy();
  });

  test('card is to do', () => {
    const info = {
      state: { isFavorite: true, isToDo: false },
      card: { isFavorite: false, isToDo: true },
    };

    expect(isInFilter(info)).toBeFalsy();
  });

  test('card is both', () => {
    const info = {
      state: { isFavorite: true, isToDo: false },
      card: { isFavorite: true, isToDo: true },
    };

    expect(isInFilter(info)).toBeTruthy();
  });
});

describe('toDo filters', () => {
  test('card is favorite', () => {
    const info = {
      state: { isFavorite: false, isToDo: true },
      card: { isFavorite: true, isToDo: false },
    };

    expect(isInFilter(info)).toBeFalsy();
  });

  test('card is to do', () => {
    const info = {
      state: { isFavorite: false, isToDo: true },
      card: { isFavorite: false, isToDo: true },
    };

    expect(isInFilter(info)).toBeTruthy();
  });

  test('card is both', () => {
    const info = {
      state: { isFavorite: false, isToDo: true },
      card: { isFavorite: true, isToDo: true },
    };

    expect(isInFilter(info)).toBeTruthy();
  });
});

describe('both filters', () => {
  test('card is favorite', () => {
    const info = {
      state: { isFavorite: true, isToDo: true },
      card: { isFavorite: true, isToDo: false },
    };

    expect(isInFilter(info)).toBeFalsy();
  });

  test('card is to do', () => {
    const info = {
      state: { isFavorite: true, isToDo: true },
      card: { isFavorite: false, isToDo: true },
    };

    expect(isInFilter(info)).toBeFalsy();
  });

  test('card is both', () => {
    const info = {
      state: { isFavorite: true, isToDo: true },
      card: { isFavorite: true, isToDo: true },
    };

    expect(isInFilter(info)).toBeFalsy();
  });
});
