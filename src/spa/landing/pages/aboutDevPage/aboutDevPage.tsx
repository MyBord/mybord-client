import * as React from 'react';
import AboutForDevs from 'copy/aboutForDevs/aboutForDevs';
import AboutStack from 'copy/aboutStack/aboutStack';
import pageWrapper from 'landing/pages/pageWrapper/pageWrapper';

const AboutDevPage: React.FC = () => (
  <>
    <AboutForDevs />
    <AboutStack />
  </>
);

export default pageWrapper(AboutDevPage);
