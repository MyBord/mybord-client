import * as React from 'react';
import TextInput from 'inputs/textInput/textInput';
import Button from 'buttons/button/button';

const PageOneHeader: React.FC = () => (
  <div>
    <TextInput placeholder="youtube url" />
    <Button htmlType="submit" label="Add Video" />
  </div>
);

export default PageOneHeader;
