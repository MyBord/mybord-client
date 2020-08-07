import * as React from 'react';
import Icon from 'icons/icon/icon';
import Typography from 'typography/typography';
import logo from 'assets/logo/logo.png';
import * as styles from './footer.module.less';

const CopyrightContent: React.FC = () => (
  <div className={styles.copyrightDiv}>
    <Icon color="white" iconName="copyright" size={20} />
  </div>
);

const EmailContent: React.FC = () => (
  <div className={styles.iconDiv}>
    <Icon color="white" iconName="paperAirplane" size={24} strokeWidth={4} />
  </div>
);

const FacebookContent: React.FC = () => (
  <div className={styles.iconDiv}>
    <Icon color="white" iconName="facebook" size={24} />
  </div>
);

const InstagramContent: React.FC = () => (
  <div className={styles.iconDiv}>
    <Icon color="white" iconName="instagram" size={24} />
  </div>
);

const LinkedinContent: React.FC = () => (
  <div className={styles.iconDiv}>
    <Icon color="white" iconName="linkedin" size={24} />
  </div>
);

const TwitterContent: React.FC = () => (
  <div className={styles.iconDiv}>
    <Icon color="white" iconName="twitter" size={24} />
  </div>
);

const Footer: React.FC = () => {
  const contentRef = React.useRef<HTMLDivElement>(null);
  // todo: set type of state
  const [imgStyles, setImgStyles] = React.useState(null);
  // todo: set type of state
  const [hrStyles, setHrStyles] = React.useState(null);

  // fix maximum update
  React.useEffect(() => {
    if (contentRef.current) {
      const contentRect = contentRef.current.getBoundingClientRect();
      // don't always be in center if it is wider
      setImgStyles({ left: `${(contentRect.left / 2) - 16}px` });
      setHrStyles({ width: `${contentRect.width - 96}px` });
    }
  }, [contentRef, imgStyles]);

  return (
    <section className={styles.section}>
      <img
        alt="MyBord logo"
        className={styles.logo}
        src={logo}
        style={imgStyles}
      />
      <div className={styles.footerContent} ref={contentRef}>
        <div className={styles.list}>
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
                link="mailto:info@mybord.io"
                size="three"
                text="info@mybord.io"
              />
            </li>
          </ul>
        </div>
        <div className={styles.list}>
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
                link="/terms"
                size="three"
                text="Terms & Conditions"
              />
            </li>
            <li>
              <Typography
                color="white"
                link="/privacy"
                size="three"
                text="Privacy Policy"
              />
            </li>
          </ul>
        </div>
        <div className={styles.list}>
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
                Content={InstagramContent}
                color="white"
                link="https://www.instagram.com/"
                size="three"
                text="Instagram"
              />
            </li>
            <li>
              <Typography
                Content={LinkedinContent}
                color="white"
                link="https://www.linkedin.com/"
                size="three"
                text="Linkedin"
              />
            </li>
            <li>
              <Typography
                Content={TwitterContent}
                color="white"
                link="https://www.twitter.com/"
                size="three"
                text="Twitter"
              />
            </li>
            <li>
              <Typography
                Content={FacebookContent}
                color="white"
                link="https://www.facebook.com/"
                size="three"
                text="Facebook"
              />
            </li>
          </ul>
        </div>
      </div>
      <hr className={styles.hr} style={hrStyles} />
      <div className={styles.copyrightContent}>
        <Typography
          Content={CopyrightContent}
          color="white"
          size="three"
          text="Copyright 2020 by MyBord.io. All Rights Reserved."
        />
      </div>
    </section>
  );
};

export default Footer;
