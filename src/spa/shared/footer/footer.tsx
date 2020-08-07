import * as React from 'react';
import Icon from 'icons/icon/icon';
import Typography from 'typography/typography';
import logo from 'assets/logo/logo.png';
import FooterContent from './footerContent/footerContent';
import * as styles from './footer.module.less';

const CopyrightContent: React.FC = () => (
  <div className={styles.copyrightDiv}>
    <Icon color="white" iconName="copyright" size={20} />
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
      <FooterContent ref={contentRef} />
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
