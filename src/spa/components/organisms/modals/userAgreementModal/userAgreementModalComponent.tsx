import * as React from 'react';
import Button from 'buttons/button/button';
import Typography from 'typography/typography';
import * as styles from './userAgreementModal.module.less';

const agreement = "By clicking 'Accept', I agree to the Terms & Conditions and the Privacy Policy"
  + ' provided below:';

interface Props {
  handleBack: () => void;
  handleSignup: () => Promise<void>;
  isAuthenticationWaiting: boolean;
}

const UserAgreementModalComponent: React.FC<Props> = ({
  handleBack,
  handleSignup,
  isAuthenticationWaiting,
}) => (
  <div className={styles.container}>
    <Typography text={agreement} />
    <ul>
      <li>
        <Typography link="/termsAndConditions" text="Terms & Conditions" />
      </li>
      <li>
        <Typography link="/privacyPolicy" text="Privacy Policy" />
      </li>
    </ul>
    <div className={styles.buttonContainer}>
      <Button
        autoFocus
        isWaiting={isAuthenticationWaiting}
        label="Accept"
        onClick={handleSignup}
      />
      <Button
        label="back"
        onClick={handleBack}
        type="tertiary"
      />
    </div>
  </div>
);

export default UserAgreementModalComponent;
