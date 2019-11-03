import * as React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import Typography, { TypographyTypes, typographyTypes } from './typography';

const setup = (text: string, type: TypographyTypes): ShallowWrapper => shallow(
  <Typography
    text={text}
    type={type}
  />,
);

describe('basic rendering', () => {
  const typographyRenderTest = (type: TypographyTypes): void => test(
    `typography of type ${type} renders`,
    () => {
      const wrapper = setup('hello world', type);
      if (type === 'h1') {
        expect(wrapper.find('h1').length).toBe(1);
      } else if (type === 'h2') {
        expect(wrapper.find('h2').length).toBe(1);
      } else {
        expect(wrapper.find('p').length).toBe(1);
      }
      expect(wrapper.text()).toBe('hello world');
    },
  );

  Object.keys(typographyTypes).forEach((type: TypographyTypes) => typographyRenderTest(type));
});

describe('conditional rendering', () => {
  test('error is thrown when an unexpected typography type is provided', () => {
    // @ts-ignore - let `setup` return a non `TypographyType` value so we can assert an error.
    expect(() => setup('hello world', 'foo')).toThrow();
  });
});
