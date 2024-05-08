import * as React from 'react';
import Form from 'form/form';
import SignupFormContent from 'forms/signupForm/signupFormContent';
import { FormProp } from 'types/formTypes';
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

  // ----- HANDLERS ----- //

  const handleSignUp = async (form: FormProp): Promise<void> => {
    const values = form.getFieldsValue();

    setIsAuthenticationWaiting(true);
  };

  React.useEffect(() => {
    if (userHasAgreedToTerms) {
      console.log('user has agreed to terms ... send them a verification email');
    }
  }, [userHasAgreedToTerms]);

  // ----- DATA HANDLING ----- //

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

