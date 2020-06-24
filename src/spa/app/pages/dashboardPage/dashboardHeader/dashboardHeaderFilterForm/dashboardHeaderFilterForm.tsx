import * as React from 'react';
import { useMutation } from '@apollo/react-hooks';
import handleError from 'server/errors/handleError';
import { CREATE_YOUTUBE_CARD } from 'schema/card';
import { FormProp } from 'types/formTypes';
import DashboardHeaderFilterFormContent from './dashboardHeaderFilterFormContent';

const DashboardHeaderFilterForm: React.FC = () => {
  const [createYoutubeCard] = useMutation(CREATE_YOUTUBE_CARD);
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
    <DashboardHeaderFilterFormContent
      errorMessage={inputErrorMessage}
      isWaiting={isSubmitWaiting}
      onSubmit={handleSubmit}
    />
  );
};

export default DashboardHeaderFilterForm;
