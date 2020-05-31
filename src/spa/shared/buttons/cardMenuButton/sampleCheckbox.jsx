/* eslint-disable */
import * as React from 'react';
import { Button, Checkbox } from 'antd';

class SampleCheckbox extends React.Component {
  constructor() {
    super({});
    this.state = {
      checked: true,
    };
    this.toggleChecked = this.toggleChecked.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    console.log('checked = ', e.target.checked);
    this.setState({ checked: e.target.checked });
  }

  toggleChecked() {
    this.setState({ checked: !this.state.checked });
  }

  render() {
    return (
      <div>
        <Checkbox
          checked={this.state.checked}
          onChange={this.onChange}
        >
          {this.state.checked ? 'Checked' : 'Unchecked'}
        </Checkbox>
        <Button type="primary" size="small" onClick={this.toggleChecked}>
          {!this.state.checked ? 'Check' : 'Uncheck'}
        </Button>
      </div>
    );
  }
}

export default SampleCheckbox;
