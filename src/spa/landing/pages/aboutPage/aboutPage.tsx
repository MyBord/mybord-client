import * as React from 'react';
import pageWrapper from 'landing/pages/pageWrapper/pageWrapper';
import * as styles from './aboutPage.module.less';

const AboutPage: React.FC = () => <div className={styles.div}>About</div>;

export default pageWrapper(AboutPage);
