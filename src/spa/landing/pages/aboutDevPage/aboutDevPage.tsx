import * as React from 'react';
import AboutDevDescription from 'pages/aboutDevPage/aboutDevDescription/aboutDevDescription';
import AboutDevStack from 'pages/aboutDevPage/aboutDevStack/aboutDevStack';
import pageWrapper from 'landing/pages/pageWrapper/pageWrapper';

const AboutDevPage: React.FC = () => (
  <>
    <AboutDevDescription />
    <AboutDevStack />
  </>
);

export default pageWrapper(AboutDevPage);
