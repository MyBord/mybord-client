import * as React from 'react';
import AboutForDevs from 'about/aboutForDevs/aboutForDevs';
import pageWrapper from 'landing/pages/pageWrapper/pageWrapper';

const AboutDevPage: React.FC = () => <AboutForDevs />;

export default pageWrapper(AboutDevPage);
