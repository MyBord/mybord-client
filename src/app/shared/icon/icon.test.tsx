// import * as React from 'react';
// import { AccountSearchIcon, EmailSearchIcon } from 'mdi-react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { ShallowWrapper, shallow } from 'enzyme';
// import Icon, { IconName, icons } from './icon';
//
// const setup = (iconName: IconName): ShallowWrapper => shallow(<Icon iconName={iconName} />);
//
// describe('basic rendering', () => {
//   const iconRenderTest = (iconName: IconName): void => test(`icon ${iconName} renders`, () => {
//     const wrapper = setup(iconName);
//     if (iconName === 'emailPreview') {
//       expect(wrapper.find(EmailSearchIcon).length).toBe(1);
//     } else if (iconName === 'prospectPreview') {
//       expect(wrapper.find(AccountSearchIcon).length).toBe(1);
//     } else {
//       expect(wrapper.find(FontAwesomeIcon).length).toBe(1);
//     }
//   });
//
//   Object.keys(icons).forEach((icon: IconName) => iconRenderTest(icon));
// });
//
// describe('conditional rendering', () => {
//   test('error is thrown when an unexpected iconName is provided', () => {
//     // @ts-ignore - let `setup` return a non `IconName` type value so we can assert an error.
//     expect(() => setup('foo')).toThrow();
//   });
// });
