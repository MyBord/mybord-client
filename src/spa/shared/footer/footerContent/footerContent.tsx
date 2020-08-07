import * as React from 'react';
import Icon from 'icons/icon/icon';
import Typography from 'typography/typography';
import * as styles from './footerContent.module.less';

const EmailContent: React.FC = () => (
  <div className={styles.iconDiv}>
    <Icon color="blue" iconName="paperAirplane" size={24} strokeWidth={4} />
  </div>
);

const FacebookContent: React.FC = () => (
  <div className={styles.iconDiv}>
    <Icon color="blue" iconName="facebook" size={24} />
  </div>
);

const InstagramContent: React.FC = () => (
  <div className={styles.iconDiv}>
    <Icon color="blue" iconName="instagram" size={24} />
  </div>
);

const LinkedinContent: React.FC = () => (
  <div className={styles.iconDiv}>
    <Icon color="blue" iconName="linkedin" size={24} />
  </div>
);

const TwitterContent: React.FC = () => (
  <div className={styles.iconDiv}>
    <Icon color="blue" iconName="twitter" size={24} />
  </div>
);

interface Props {
  isApp: boolean; // does the footer appear in the 'app' or in the 'landing'?
}

const FooterContent = React.forwardRef<HTMLDivElement, Props>(({ isApp }, ref) => (
  <div className={styles.footerContent} ref={ref}>
    <div className={styles.list}>
      <Typography
        color={isApp ? 'black' : 'white'}
        size="four"
        text="Have a question?"
        weight="bold"
      />
      <ul className={styles.ul}>
        <li>
          <Typography
            Content={EmailContent}
            color={isApp ? 'black' : 'white'}
            link="mailto:info@mybord.io"
            size="three"
            text="info@mybord.io"
          />
        </li>
      </ul>
    </div>
    <div className={styles.list}>
      <Typography
        color={isApp ? 'black' : 'white'}
        size="four"
        text="Legal"
        weight="bold"
      />
      <ul className={styles.ul}>
        <li>
          <Typography
            color={isApp ? 'black' : 'white'}
            link="/terms"
            size="three"
            text="Terms & Conditions"
          />
        </li>
        <li>
          <Typography
            color={isApp ? 'black' : 'white'}
            link="/privacy"
            size="three"
            text="Privacy Policy"
          />
        </li>
      </ul>
    </div>
    <div className={styles.list}>
      <Typography
        color={isApp ? 'black' : 'white'}
        size="four"
        text="Social"
        weight="bold"
      />
      <ul className={styles.ul}>
        <li>
          <Typography
            Content={InstagramContent}
            color={isApp ? 'black' : 'white'}
            link="https://www.instagram.com/"
            size="three"
            text="Instagram"
          />
        </li>
        <li>
          <Typography
            Content={LinkedinContent}
            color={isApp ? 'black' : 'white'}
            link="https://www.linkedin.com/"
            size="three"
            text="Linkedin"
          />
        </li>
        <li>
          <Typography
            Content={TwitterContent}
            color={isApp ? 'black' : 'white'}
            link="https://www.twitter.com/"
            size="three"
            text="Twitter"
          />
        </li>
        <li>
          <Typography
            Content={FacebookContent}
            color={isApp ? 'black' : 'white'}
            link="https://www.facebook.com/"
            size="three"
            text="Facebook"
          />
        </li>
      </ul>
    </div>
  </div>
));

export default FooterContent;
