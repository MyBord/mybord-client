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
  const sectionRef = React.useRef<HTMLTableSectionElement>(null);
  const [hrStyles, setHrStyles] = React.useState<FooterHrStyle>(null);
  const [imgStyles, setImgStyles] = React.useState<FooterImgStyle>(null);

  React.useEffect(() => {
    const setFooterStyles = (): void => {
      if (contentRef.current && sectionRef.current) {
        setImgStyles(getImgStyles(contentRef, sectionRef));
        setHrStyles(getHrStyles(contentRef));
      }
    };

    setFooterStyles();

    window.addEventListener('resize', setFooterStyles);
  }, [contentRef]);

  return (
    <section className={styles.section} ref={sectionRef}>
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
