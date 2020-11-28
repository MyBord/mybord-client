import * as React from 'react';
import Form from 'form/form';
import UserSettingsPageFormContent from './userSettingsPageFormContent';

const UserSettingsPageForm: React.FC = () => (
  <Form layout="horizontal">
    <UserSettingsPageFormContent />
  </Form>
);

export default UserSettingsPageForm;
