import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import Upload from './Upload';

const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
};

class Format extends React.Component {
  state = {
    checked: false,
  }

  updateCheck() {
    this.setState((oldState) => {
      return {
        checked: !oldState.checked,
      };
    });
  }

  render() {
    const content = this.state.checked
      ? <Upload />
      : null;

    return (
      <div style={styles.block}>
        <Checkbox
          label="MYSQL"
          style={styles.checkbox}
        />
        <Checkbox
          label="csv"
          checked={this.state.checked}
          onCheck={this.updateCheck.bind(this)}
          style={styles.checkbox}
        />
        { content }
      </div>
    );
  }
}

export default Format
