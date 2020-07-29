import * as React from 'react';
import pageWrapper from 'landing/pages/pageWrapper/pageWrapper';
import * as styles from './aboutDevPage.module.less';

const AboutDevPage: React.FC = () => <div className={styles.div}>About Dev Page</div>;

export default pageWrapper(AboutDevPage);
