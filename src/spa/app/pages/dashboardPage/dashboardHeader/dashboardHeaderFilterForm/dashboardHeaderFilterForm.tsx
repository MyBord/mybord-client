import * as React from 'react';
import { useMutation } from '@apollo/react-hooks';
import Button from 'buttons/button/button';
import FormItem from 'forms/formItem/formItem';
import TextInput from 'inputs/textInput/textInput';
import formWrapper from 'forms/formWrapper/formWrapper';
import handleError from 'server/errors/handleError';
import { CREATE_YOUTUBE_CARD } from 'schema/card';
import { FormProp } from 'types/formTypes';
import * as styles from './dashboardHeaderFilterForm.module.less';

interface Props {
  form: FormProp;
}

const DashboardHeaderFilterForm: React.FC = () => {
  const [createYoutubeCard] = useMutation(CREATE_YOUTUBE_CARD);
  const [inputErrorMessage, setInputErrorMessage] = React.useState(null);
  const [isSubmitWaiting, setIsSubmitWaiting] = React.useState(false);

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

  const FormContent: React.FC<Props> = ({ form }) => (
    <div className={styles.div}>
      <FormItem
        errorMessage={inputErrorMessage}
        fieldName="add-youtube-video-input"
        form={form}
      >
        <TextInput placeholder="youtube url" />
      </FormItem>
      <FormItem fieldName="add-youtube-video-submit" form={form}>
        <Button
          htmlType="submit"
          label="Add Video"
          waiting={isSubmitWaiting}
        />
      </FormItem>
    </div>
  );

  const Form = formWrapper(FormContent, handleSubmit);

  return <Form />;
};

export default DashboardHeaderFilterForm;
