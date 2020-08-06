import * as React from 'react';
import Typography from 'typography/typography';
import * as styles from './footer.module.less';

const Footer: React.FC = () => (
  <section className={styles.section}>
    <div className={styles.divList} style={{ margin: '2rem' }}>
      <Typography
        color="white"
        text="Have a question?"
        weight="bold"
      />
    </div>
  </section>
);

export default Footer;
