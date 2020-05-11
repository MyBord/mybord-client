import * as React from 'react';
import App from 'app/app';
import Landing from 'landing/landing';
import SpaAnimation from 'framerMotion/spaAnimation';
import { useAuthenticationContext } from 'context/authenticationContext';
import initializeSpaWrapper from './initializeSpaWrapper';
import * as styles from './spa.module.less';

// This component renders the application with a landing page or the actual application based
// on the users authentication status.
const SpaContainer: React.FC = () => {
  const { isAuthenticated } = useAuthenticationContext();
  return (
    <SpaAnimation isAuthenticated={isAuthenticated}>
      <div className={styles.div}>
        {
          isAuthenticated
            ? <App />
            : <Landing />
        }
      </div>
    </SpaAnimation>
  );
};

export default initializeSpaWrapper(SpaContainer);
