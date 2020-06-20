import * as React from 'react';
import { useMutation } from '@apollo/react-hooks';
import handleError from 'server/errors/handleError';
import { CREATE_YOUTUBE_CARD } from 'schema/card';
import { FormProp } from 'types/formTypes';
import { useCardContext } from 'context/cardContext';
import DashboardHeaderFilterFormComponent from './dashboardHeaderFilterFormComponent';

const DashboardHeaderFilterFormContainer: React.FC = () => {
  const [createYoutubeCard] = useMutation(CREATE_YOUTUBE_CARD);
  const [inputErrorMessage, setInputErrorMessage] = React.useState(null);
  const [isSubmitWaiting, setIsSubmitWaiting] = React.useState(false);
  const { canMultiEdit, toggleMultiEditStatus } = useCardContext();

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
    <DashboardHeaderFilterFormComponent
      canMultiEdit={canMultiEdit}
      errorMessage={inputErrorMessage}
      isWaiting={isSubmitWaiting}
      onSubmit={handleSubmit}
      toggleMultiEditStatus={toggleMultiEditStatus}
    />
  );
};

export default DashboardHeaderFilterFormContainer;
