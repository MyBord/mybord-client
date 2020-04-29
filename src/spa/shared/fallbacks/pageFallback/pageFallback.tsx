import * as React from 'react';
import Spinner from 'fallbacks/spinner/spinner';
import * as styles from './pageFallback.module.less';

// This component is used to render a fallback / spinner for the entire spa page when the spa
// itself is loading / initializing.
const PageFallback: React.FC = () => (
  <div className={styles.div}>
    <Spinner />
  </div>
);

export default PageFallback;
