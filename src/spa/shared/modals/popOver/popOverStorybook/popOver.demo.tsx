import * as React from 'react';
import { Select } from 'antd';
import 'antd/lib/select/style/index.less';
import PopOverContainer from '../popOverContainer';

const caretOptions = [
  {
    label: 'bottom',
    value: 'bottom',
  },
  {
    label: 'center',
    value: 'center',
  },
  {
    label: 'left',
    value: 'left',
  },
  {
    label: 'right',
    value: 'right',
  },
  {
    label: 'top',
    value: 'top',
  },
];

const selectOptions = [
  {
    label: 'bottom-center',
    value: 'bottom-center',
  },
  {
    label: 'bottom-left',
    value: 'bottom-left',
  },
  {
    label: 'bottom-right',
    value: 'bottom-right',
  },
  {
    label: 'left-bottom',
    value: 'left-bottom',
  },
  {
    label: 'left-center',
    value: 'left-center',
  },
  {
    label: 'left-top',
    value: 'left-top',
  },
  {
    label: 'right-bottom',
    value: 'right-bottom',
  },
  {
    label: 'right-center',
    value: 'right-center',
  },
  {
    label: 'right-top',
    value: 'right-top',
  },
  {
    label: 'top-center',
    value: 'top-center',
  },
  {
    label: 'top-left',
    value: 'top-left',
  },
  {
    label: 'top-right',
    value: 'top-right',
  },
];

const PopOverDemo: React.FC = () => (
  <>
    <PopOverContainer
      Content={<div style={{ width: '2rem', margin: '1rem' }}>foo bar</div>}
      caretPlacement="center"
      defaultVisible
      placement="bottom-center"
    >
      <div style={{
        border: '1px solid red',
        width: '30px',
        height: '30px',
      }}
      >
        <h3>I am some content</h3>
      </div>
    </PopOverContainer>
  </>
);

export default PopOverDemo;
