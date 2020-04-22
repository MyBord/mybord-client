import * as React from 'react';
import { useMutation } from '@apollo/react-hooks';
import Button from 'buttons/button/button';
import FormItem from 'forms/formItem/formItem';
import TextInput from 'inputs/textInput/textInput';
import formWrapper from 'forms/formWrapper/formWrapper';
import { CREATE_YOUTUBE_CARD } from 'schema/card';
import { FormProp } from 'types/formTypes';
import * as styles from './dashboardHeaderFilterForm.module.less';

interface Props {
  form: FormProp;
}

const DashboardHeaderFilterForm: React.FC = () => {
  const [createYoutubeCard] = useMutation(CREATE_YOUTUBE_CARD);

  const handleSubmit = async (form: FormProp): Promise<void> => {
    await createYoutubeCard({
      variables: {
        videoId: form.getFieldValue('add-youtube-video-input'),
      },
    });
  };

  const FormContent: React.FC<Props> = ({ form }) => (
    <div className={styles.div}>
      <FormItem fieldName="add-youtube-video-input" form={form}>
        <TextInput placeholder="youtube url" />
      </FormItem>
      <FormItem fieldName="add-youtube-video-submit" form={form}>
        <Button htmlType="submit" label="Add Video" />
      </FormItem>
    </div>
  );

  const Form = formWrapper(FormContent, handleSubmit);

  return <Form />;
};

export default DashboardHeaderFilterForm;
