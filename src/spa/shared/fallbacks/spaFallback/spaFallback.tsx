import * as React from 'react';
import Spinner from 'fallbacks/spinner/spinner';
import * as styles from './spaFallback.module.less';

// This component is used to render a fallback for the entire spa when the spa is loading /
// initializing.
const SpaFallback: React.FC = () => (
  <div className={styles.div}>
    <Spinner />
  </div>
);

export default SpaFallback;
