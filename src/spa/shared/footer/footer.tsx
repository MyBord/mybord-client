import * as React from 'react';
import Icon from 'icons/icon/icon';
import Typography from 'typography/typography';
import * as styles from './footer.module.less';

const EmailContent: React.FC = () => <Icon color="white" iconName="mail" size={24} />;

const Footer: React.FC = () => (
  <section className={styles.section}>
    <div className={styles.footerContent}>
      <div className={styles.list} style={{ margin: '2rem' }}>
        <div className={styles.listHeader}>
                                            <Typography
                                            color="white"
                                            size="four"
                                            text="Have a question?"
                                            weight="bold"
                                            />
                                            </div>
        <ul className={styles.ul}>
                                   <li>
                                   <Typography
                                   Content={EmailContent}
                                   color="white"
                                   size="three"
                                   text="info@mybord.io"
                                   />
                                   </li>
                                   </ul>
      </div>
      <div className={styles.list} style={{ margin: '2rem' }}>
        <div className={styles.listHeader}>
          <Typography
            color="white"
            size="four"
            text="Legal"
            weight="bold"
          />
        </div>
        <ul className={styles.ul}>
          <li>
            <Typography
              color="white"
              size="three"
              text="Terms & Conditions"
            />
          </li>
          <li>
            <Typography
              color="white"
              size="three"
              text="Privacy Policy"
            />
          </li>
        </ul>
      </div>
      <div className={styles.list} style={{ margin: '2rem' }}>
        <div className={styles.listHeader}>
          <Typography
            color="white"
            size="four"
            text="Social"
            weight="bold"
          />
        </div>
        <ul className={styles.ul}>
          <li>
            <Typography
              color="white"
              size="three"
              text="Instagram"
            />
          </li>
          <li>
            <Typography
              color="white"
              size="three"
              text="Linkedin"
            />
          </li>
          <li>
            <Typography
              color="white"
              size="three"
              text="Twitter"
            />
          </li>
          <li>
            <Typography
              color="white"
              size="three"
              text="Facebook"
            />
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default Footer;
