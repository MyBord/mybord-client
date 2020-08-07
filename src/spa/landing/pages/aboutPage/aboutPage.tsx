import * as React from 'react';
import AboutForUsers from 'about/aboutForUsers/aboutForUsers';
import pageWrapper from 'landing/pages/pageWrapper/pageWrapper';

const AboutPage: React.FC = () => <AboutForUsers />;

export default pageWrapper(AboutPage);
