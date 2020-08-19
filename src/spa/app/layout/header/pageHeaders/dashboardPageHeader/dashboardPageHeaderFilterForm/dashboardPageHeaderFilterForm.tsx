import * as React from 'react';
import { useMutation } from '@apollo/react-hooks';
import Form from 'forms/form/form';
import handleError from 'server/errors/handleError';
import { INITIATE_USER_CARD_MUTATION } from 'schema/card';
import { FormProp } from 'types/formTypes';
import { useModalContext } from 'context/modalContext/modalContext';
import DashboardPageHeaderFilterFormContent from './dashboardPageHeaderFilterFormContent';

const DashboardPageHeaderFilterForm: React.FC = () => {
  const [initiateUserCard, { data }] = useMutation(INITIATE_USER_CARD_MUTATION);
  const [inputErrorMessage, setInputErrorMessage] = React.useState<string>(null);
  const [isSubmitWaiting, setIsSubmitWaiting] = React.useState<boolean>(false);
  const { setModalData, setModalId } = useModalContext();

  const handleSubmit = async (form: FormProp): Promise<void> => {
    try {
      setIsSubmitWaiting(true);

      const cardData = await initiateUserCard({
        variables: {
          url: form.getFieldValue('add-youtube-video-input'),
        },
      });

      const {
        category,
        title,
        url,
        youtubeCardData,
      } = cardData.data.initiateUserCard;

      setInputErrorMessage(null);
      setIsSubmitWaiting(false);
      form.resetFields(['add-youtube-video-input']);

      setModalData({
        category,
        title,
        url,
        youtubeCardData,
      });
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
    <Form onSubmit={handleSubmit}>
      <DashboardPageHeaderFilterFormContent
        errorMessage={inputErrorMessage}
        isWaiting={isSubmitWaiting}
      />
    </Form>
  );
};

export default DashboardPageHeaderFilterForm;
