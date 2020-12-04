import * as React from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import Form from 'form/form';
import SignupFormContent from 'forms/signupForm/signupFormContent';
import getGraphQLErrorMessage from 'utils/getGraphQLErrorMessage';
import { FormProp } from 'types/formTypes';
import { VALIDATE_USER_SIGNUP } from 'schema/user';
import { useModalContext } from 'context/modalContext/modalContext';

export type SignupStatus = 'duplicate email'
| 'duplicate username'
| 'invalid username'
| 'weak password';

interface Props {
  handleBack: () => void;
}

const SignupFormContainer: React.FC<Props> = (props) => {
  // ----- STATE ----- //

  const [isAuthenticationWaiting, setIsAuthenticationWaiting] = React.useState<boolean>(false);
  const [signupStatus, setSignupStatus] = React.useState<SignupStatus>(null);
  const [userHasAgreedToTerms, setUserHasAgreedToTerms] = React.useState<boolean>(false);
  const { setModalId } = useModalContext();

  // ----- QUERIES & MUTATIONS ----- //

  const [validateUserSignupQuery, { called, error, loading }] = useLazyQuery(
    VALIDATE_USER_SIGNUP,
    { fetchPolicy: 'no-cache' },
  );

  // ----- HANDLERS ----- //

  const handleSignUp = async (form: FormProp): Promise<void> => {
    const values = form.getFieldsValue();

    setIsAuthenticationWaiting(true);

    await validateUserSignupQuery({
      variables: {
        email: values.loginEmail,
        password: values.loginPassword,
        username: values.loginUsername,
      },
    });
  };

  React.useEffect(() => {
    if (userHasAgreedToTerms) {
      console.log('user has agreed to terms ... send them a verification email');
    }
  }, [userHasAgreedToTerms]);

  // ----- DATA HANDLING ----- //

  if (called && !loading) {
    if (error) {
      setIsAuthenticationWaiting(false);
      const errorMessage = getGraphQLErrorMessage(error.message);

      if (
        [
          'duplicate email',
          'duplicate username',
          'invalid username',
          'weak password',
        ].includes(errorMessage)
      ) {
        // @ts-ignore - error message is compatible
        setSignupStatus(errorMessage);
      }
    } else {
      setIsAuthenticationWaiting(false);
      setModalId('signup-terms-modal');
    }
  }

  // ----- COMPONENT ----- //

  // does type need to be "login"?
  return (
    <Form onSubmit={handleSignUp}>
      <SignupFormContent
        handleAcceptTerms={() => setUserHasAgreedToTerms(true)}
        isAuthenticationWaiting={isAuthenticationWaiting}
        signupStatus={signupStatus}
        {...props}
      />
    </Form>
  );
};

export default SignupFormContainer;

