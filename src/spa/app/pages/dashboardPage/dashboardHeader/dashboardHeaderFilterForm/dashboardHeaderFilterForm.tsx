import * as React from 'react';
import { useMutation } from '@apollo/react-hooks';
import Button from 'buttons/button/button';
import FormItem from 'forms/formItem/formItem';
import TextInput from 'inputs/textInput/textInput';
import formWrapper from 'forms/formWrapper/formWrapper';
import { CREATE_YOUTUBE_CARD } from 'schema/card';
import { FormProp } from 'types/formTypes';

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
    <>
      <FormItem fieldName="add-youtube-video-input" form={form}>
        <TextInput placeholder="Add youtube url" />
      </FormItem>
      <Button htmlType="submit" label="Add" />
    </>
  );

  const Form = formWrapper(FormContent, handleSubmit);

  return <Form />;
};

export default DashboardHeaderFilterForm;
