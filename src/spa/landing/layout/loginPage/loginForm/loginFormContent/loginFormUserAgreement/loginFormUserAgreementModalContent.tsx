import * as React from 'react';
import { useMutation } from '@apollo/react-hooks';
import Button from 'buttons/button/button';
import Typography from 'typography/typography';
import handleError from 'server/errors/handleError';
import { CREATE_USER_MUTATION } from 'schema/user';
import { FormProp } from 'types/formTypes';
import { useLoginContext } from 'context/loginContext/loginContext';
import { useModalContext } from 'context/modalContext/modalContext';
import * as styles from './loginFormUserAgreementModalContent.module.less';

const agreement = "By clicking 'Accept', I agree to the Terms & Conditions and the Privacy Policy"
+ ' provided below:';

interface Props {
  form: FormProp;
}

const LoginFormUserAgreementModalContent: React.FC<Props> = ({
  form,
}) => {
  const [createUser] = useMutation(CREATE_USER_MUTATION);
  const [isAuthenticationWaiting, setIsAuthenticationWaiting] = React.useState<boolean>(false);
  const containerDivRef = React.useRef<HTMLDivElement>(null);
  const { setModalId } = useModalContext();
  const { setSignUpStatus, setUserHasAgreedToTerms } = useLoginContext();

  React.useEffect(() => {
    if (containerDivRef && containerDivRef.current) {
      containerDivRef.current.focus();
    }
  }, [containerDivRef])

  const handleSignup = async (): Promise<void> => {
    const values = form.getFieldsValue();
    try {
      setIsAuthenticationWaiting(true);

      // try to create the new user with the backend
      await createUser({
        variables: {
          email: values.loginEmail,
          password: values.loginPassword,
          username: values.loginUsername,
        },
      });

      setUserHasAgreedToTerms(true);

      setIsAuthenticationWaiting(false);
      setModalId(null);
    } catch (error) {
      setIsAuthenticationWaiting(false);
      setModalId(null);

      // If a 400 status is returned, notify the user that their password is not strong enough
      const { message, status } = handleError(error);
      if (status === 400) {
        if (message === 'invalid username') {
          setSignUpStatus('invalid username');
        }
        if (message === 'duplicate username') {
          setSignUpStatus('duplicate username');
        }
        if (message === 'weak password') {
          setSignUpStatus('weak password');
        }
        if (message === 'duplicate email') {
          setSignUpStatus('duplicate email');
        }
      }

    }
  };

  return (
    <div className={styles.container} ref={containerDivRef}>
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
          isWaiting={isAuthenticationWaiting}
          label="Accept"
          onClick={handleSignup}
        />
        <Button
          label="back"
          onClick={() => setModalId(null)}
          type="tertiary"
        />
      </div>
    </div>
  );
};

export default LoginFormUserAgreementModalContent;
