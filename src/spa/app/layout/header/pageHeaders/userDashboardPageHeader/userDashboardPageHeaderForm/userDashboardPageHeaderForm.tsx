import * as React from 'react';
import Form from 'form/form';
import handleError from 'server/errors/handleError';
import { FormProp } from 'types/formTypes';
import { useModalContext } from 'context/modalContext/modalContext';
import UserDashboardPageHeaderFormContent from './UserDashboardPageHeaderFormContent';

const UserDashboardPageHeaderForm: React.FC = () => {
  const [inputErrorMessage, setInputErrorMessage] = React.useState<string>(null);
  const [isSubmitWaiting, setIsSubmitWaiting] = React.useState<boolean>(false);
  const { setModalId } = useModalContext();

  const handleSubmit = async (form: FormProp): Promise<void> => {
    try {
      setIsSubmitWaiting(true);

      setInputErrorMessage(null);
      setIsSubmitWaiting(false);
      form.resetFields(['add-card-url-input']);

      setModalId('add-card-modal');
    } catch (error) {
      setIsSubmitWaiting(false);
      const { message, status } = handleError(error);
      if (status === 400) {
        setInputErrorMessage(message);
      }
    }
  };

  return (
    <Form layout="horizontal" onSubmit={handleSubmit}>
      <UserDashboardPageHeaderFormContent
        errorMessage={inputErrorMessage}
        isWaiting={isSubmitWaiting}
      />
    </Form>
  );
};

export default UserDashboardPageHeaderForm;
