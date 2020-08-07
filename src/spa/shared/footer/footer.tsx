import * as React from 'react';
import * as styles from 'shared/footer/footer.module.less';
import FooterContent from 'shared/footer/footerContent/footerContent';
import Icon from 'icons/icon/icon';
import Typography from 'typography/typography';
import logo from 'assets/logo/logo.png';
import { FooterHrStyle, FooterImgStyle } from 'types/footerTypes';
import { getHrStyles, getImgStyles } from './getFooterStyles';

const CopyrightContent: React.FC = () => (
  <div className={styles.copyrightDiv}>
    <Icon color="white" iconName="copyright" size={20} />
  </div>
);

const Footer: React.FC = () => {
  const contentRef = React.useRef<HTMLDivElement>(null);
  const [hrStyles, setHrStyles] = React.useState<FooterHrStyle>(null);
  const [imgStyles, setImgStyles] = React.useState<FooterImgStyle>(null);

  React.useEffect(() => {
    if (contentRef.current) {
      setImgStyles(getImgStyles(contentRef));
      setHrStyles(getHrStyles(contentRef));
    }
  }, [contentRef]);

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
