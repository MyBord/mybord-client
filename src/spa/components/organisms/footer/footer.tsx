import * as React from 'react';
import Typography from 'typography/typography';
import logo from 'graphics/logo.png';
import { FooterHrStyle, FooterImgStyle, FooterProps } from 'types/footerTypes';
import FooterContent from './footerContent/footerContent';
import footerIcons from './footerIcons/footerIcons';
import { getHrStyles, getImgStyles } from './getFooterStyles';
import * as styles from './footer.module.less';

const Footer: React.FC<FooterProps> = ({ isApp }) => {
  const contentRef = React.useRef<HTMLDivElement>(null);
  const sectionRef = React.useRef<HTMLTableSectionElement>(null);
  const [hrStyles, setHrStyles] = React.useState<FooterHrStyle>(null);
  const [imgStyles, setImgStyles] = React.useState<FooterImgStyle>(null);

  React.useEffect(() => {
    const setFooterStyles = (): void => {
      if (contentRef.current && sectionRef.current) {
        setImgStyles(getImgStyles(contentRef, sectionRef, isApp));
        setHrStyles(getHrStyles(contentRef));
      }
    };

    setFooterStyles();

    window.addEventListener('resize', setFooterStyles);
  }, [contentRef]);

  return (
    <section
      className={[styles.section, !isApp ? styles.sectionLanding : undefined].join(' ')}
      ref={sectionRef}
    >
      <img
        alt="MyBord logo"
        className={styles.logo}
        src={logo}
        style={imgStyles}
      />
      <FooterContent isApp={isApp} ref={contentRef} />
      <hr className={isApp ? styles.hrApp : styles.hrLanding} style={hrStyles} />
      <div className={isApp ? styles.copyrightContentApp : styles.copyrightContentLanding}>
        {/* <Typography */}
        {/*  Content={() => <footerIcons.CopyrightContent isApp={isApp} />} */}
        {/*  color={isApp ? 'black' : 'white'} */}
        {/*  size="three" */}
        {/*  text="Copyright 2020 by MyBord LLC. All Rights Reserved." */}
        {/* /> */}
      </div>
    </section>
  );
};

export default Footer;
