import * as React from 'react';
import { useMutation } from '@apollo/react-hooks';
import Form from 'forms/form/form';
import handleError from 'server/errors/handleError';
import { CREATE_YOUTUBE_CARD_MUTATION } from 'schema/card';
import { FormProp } from 'types/formTypes';
import DashboardPageHeaderFilterFormContent from './dashboardPageHeaderFilterFormContent';

const DashboardPageHeaderFilterForm: React.FC = () => {
  const [createYoutubeCard] = useMutation(CREATE_YOUTUBE_CARD_MUTATION);
  const [inputErrorMessage, setInputErrorMessage] = React.useState<string>(null);
  const [isSubmitWaiting, setIsSubmitWaiting] = React.useState<boolean>(false);

  const handleSubmit = async (form: FormProp): Promise<void> => {
    try {
      setIsSubmitWaiting(true);
      await createYoutubeCard({
        variables: {
          videoUrl: form.getFieldValue('add-youtube-video-input'),
        },
      });
      setInputErrorMessage(null);
      setIsSubmitWaiting(false);
      form.resetFields(['add-youtube-video-input']);
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
