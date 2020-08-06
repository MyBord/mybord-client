import * as React from 'react';
import Icon from 'icons/icon/icon';
import Typography from 'typography/typography';
import * as styles from './footer.module.less';

const EmailContent: React.FC = () => <Icon color="white" iconName="mail" size={24} />;

const Footer: React.FC = () => (
  <section className={styles.section}>
    <div className={styles.list} style={{ margin: '2rem' }}>
      <div className={styles.listHeader}>
        <Typography
          color="white"
          size="four"
          text="Have a question?"
          weight="bold"
        />
      </div>
      <Typography
        Content={EmailContent}
        color="white"
        text="info@mybord.io"
      />
    </div>
  </section>
);

export default Footer;
