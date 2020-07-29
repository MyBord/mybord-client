import * as React from 'react';
import TextInput from 'inputs/textInput/textInput';
import Button from 'buttons/button/button';

const DashboardPageHeader: React.FC = () => (
  <section>
    <div>
      <TextInput placeholder="youtube url" />
      <div>
        <div>
          <Button htmlType="submit" label="Add Video" />
        </div>
      </div>
    </div>
  </section>
);

export default DashboardPageHeader;
