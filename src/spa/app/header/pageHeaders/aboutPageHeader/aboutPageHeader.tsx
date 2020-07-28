import * as React from 'react';
import Typography from 'typography/typography';
import * as styles from './aboutPageHeader.module.less';

const AboutPageHeader: React.FC = () => (
  <section className={styles.section}>
    <div>
      <Typography
        link="/about"
        size="four"
        text="About MyBord"
      />
    </div>
    <div className={styles.devDiv}>
      <Typography
        link="/about/dev"
        size="four"
        text="For Developers"
      />
    </div>
  </section>

);

export default AboutPageHeader;
