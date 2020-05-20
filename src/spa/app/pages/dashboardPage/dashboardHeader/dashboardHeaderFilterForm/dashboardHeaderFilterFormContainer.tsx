import * as React from 'react';
import { useMutation } from '@apollo/react-hooks';
import handleError from 'server/errors/handleError';
import { CREATE_YOUTUBE_CARD } from 'schema/card';
import { FormProp } from 'types/formTypes';
import DashboardHeaderFilterFormComponent from './dashboardHeaderFilterFormComponent';

const DashboardHeaderFilterFormContainer: React.FC = () => {
  const [createYoutubeCard] = useMutation(CREATE_YOUTUBE_CARD);
  const [isSubmitWaiting, setIsSubmitWaiting] = React.useState(false);
  const [inputErrorMessage, setInputErrorMessage] = React.useState(null);

  const handleSubmit = async (form: FormProp): Promise<void> => {
    try {
      setIsSubmitWaiting(true);
      await createYoutubeCard({
        variables: {
          videoUrl: form.getFieldValue('add-youtube-video-input'),
        },
      });
      setIsSubmitWaiting(false);
    } catch (error) {
      setIsSubmitWaiting(false);
      const { message, status } = handleError(error);
      if (status === 400) {
        setInputErrorMessage(message);
      }
    }
  };

  return (
    <DashboardHeaderFilterFormComponent
      errorMessage={inputErrorMessage}
      isWaiting={isSubmitWaiting}
      onSubmit={handleSubmit}
    />
  );
};

export default DashboardHeaderFilterFormContainer;
