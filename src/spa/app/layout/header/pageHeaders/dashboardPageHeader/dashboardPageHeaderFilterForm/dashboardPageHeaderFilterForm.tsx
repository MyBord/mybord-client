import * as React from 'react';
import { useMutation } from '@apollo/react-hooks';
import Form from 'forms/form/form';
import handleError from 'server/errors/handleError';
import { INITIATE_YOUTUBE_CARD_MUTATION } from 'schema/card';
import { FormProp } from 'types/formTypes';
import { useModalContext } from 'context/modalContext/modalContext';
import DashboardPageHeaderFilterFormContent from './dashboardPageHeaderFilterFormContent';

const DashboardPageHeaderFilterForm: React.FC = () => {
  const [initiateYoutubeCard] = useMutation(INITIATE_YOUTUBE_CARD_MUTATION);
  const [inputErrorMessage, setInputErrorMessage] = React.useState<string>(null);
  const [isSubmitWaiting, setIsSubmitWaiting] = React.useState<boolean>(false);
  const { setModalData, setModalId } = useModalContext();

  const handleSubmit = async (form: FormProp): Promise<void> => {
    try {
      setIsSubmitWaiting(true);
      const cardData = await initiateYoutubeCard({
        variables: {
          videoUrl: form.getFieldValue('add-youtube-video-input'),
        },
      });
      const { category, title, youtubeCardData } = cardData.data.initiateYoutubeCard;
      setInputErrorMessage(null);
      setIsSubmitWaiting(false);
      form.resetFields(['add-youtube-video-input']);
      setModalData({ category, title, youtubeCardData });
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
