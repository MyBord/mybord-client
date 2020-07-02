import * as React from 'react';
import { Select } from 'antd';
import 'antd/lib/select/style/index.less';
import PopOver from '../popOver';

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

const PopOverDemo: React.FC = () => {
  const [placement, setPlacement] = React.useState('top-center');

  // @ts-ignore
  const handleChange = (value) => setPlacement(value);

  return (
    <>
      <Select onChange={handleChange}>
        {selectOptions.map((option) => (
          <Select.Option key={option.value} value={option.value}>
            {option.label}
          </Select.Option>
        ))}
      </Select>
      <PopOver
        Content={<div style={{ width: '2rem', margin: '1rem' }}>foo bar</div>}
        caretPlacement="center"
        defaultVisible
        // @ts-ignore
        placement={placement}
      >
        <div style={{
          border: '1px solid red',
          width: '8rem',
          height: '8rem',
        }}
        >
          <h3>I am some content</h3>
          <h3>{placement}</h3>
        </div>
      </PopOver>
    </>
  );
};

export default PopOverDemo;
