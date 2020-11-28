import * as React from 'react';
import AboutForUsers from 'copy/aboutForUsers/aboutForUsers';
import pageWrapper from 'landing/pages/pageWrapper/pageWrapper';

const AboutPage: React.FC = () => <AboutForUsers />;

export default pageWrapper(AboutPage);
