import * as React from 'react';
import { useMutation } from '@apollo/react-hooks';
import Form from 'forms/form/form';
import { CREATE_YOUTUBE_CARD_MUTATION } from 'schema/card';
import DashboardPageHeaderFilterFormContent from './dashboardPageHeaderFilterFormContent';

const DashboardPageHeaderFilterForm: React.FC = () => {
  const [createYoutubeCard] = useMutation(CREATE_YOUTUBE_CARD_MUTATION);
  const [inputErrorMessage, setInputErrorMessage] = React.useState<string>(null);
  const [isSubmitWaiting, setIsSubmitWaiting] = React.useState<boolean>(false);

  return (
    <Form onSubmit={() => {}}>
      <DashboardPageHeaderFilterFormContent
        errorMessage={inputErrorMessage}
        isWaiting={isSubmitWaiting}
      />
    </Form>
  );
};

export default DashboardPageHeaderFilterForm;
