import * as React from 'react';
import TypographyPageTitle from 'typography/typographyPageTitle/typographyPageTitle';
import * as styles from './aboutPageHeader.module.less';

const AboutPageHeader: React.FC = () => (
  <section className={styles.section}>
    <div>
      <TypographyPageTitle
        link="/about"
        text="About MyBord"
      />
    </div>
    <div className={styles.devDiv}>
      <TypographyPageTitle
        link="/about/dev"
        text="For Developers"
      />
    </div>
  </section>

);

export default AboutPageHeader;
