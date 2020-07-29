import * as React from 'react';
import pageWrapper from 'landing/pages/pageWrapper/pageWrapper';
import * as styles from './aboutPage.module.less';

const AboutPage: React.FC = () => <section className={styles.section}>About</section>;

export default pageWrapper(AboutPage);
