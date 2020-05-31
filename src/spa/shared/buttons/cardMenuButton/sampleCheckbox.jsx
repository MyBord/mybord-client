/* eslint-disable */
import * as React from 'react';
import { Button, Checkbox } from 'antd';

class SampleCheckbox extends React.Component {
  constructor() {
    super({});
    this.state = {
      checked: true,
      disabled: false,
    };
    this.toggleChecked = this.toggleChecked.bind(this);
    this.toggleDisable = this.toggleDisable.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    console.log('checked = ', e.target.checked);
    this.setState({ checked: e.target.checked });
  }

  toggleChecked() {
    this.setState({ checked: !this.state.checked });
  }

  toggleDisable() {
    this.setState({ disabled: !this.state.disabled });
  }

  render() {
    const label = `${this.state.checked ? 'Checked' : 'Unchecked'}-${
      this.state.disabled ? 'Disabled' : 'Enabled'
    }`;
    return (
      <div>
        <p style={{ marginBottom: '20px' }}>
          <Checkbox
            checked={this.state.checked}
            disabled={this.state.disabled}
            onChange={this.onChange}
          >
            {label}
          </Checkbox>
        </p>
        <p>
          <Button type="primary" size="small" onClick={this.toggleChecked}>
            {!this.state.checked ? 'Check' : 'Uncheck'}
          </Button>
          <Button
            style={{ margin: '0 10px' }}
            type="primary"
            size="small"
            onClick={this.toggleDisable}
          >
            {!this.state.disabled ? 'Disable' : 'Enable'}
          </Button>
        </p>
      </div>
    );
  }
}

export default SampleCheckbox;
