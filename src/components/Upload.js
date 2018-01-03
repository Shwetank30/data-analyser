import React, { Component } from 'react';
import ReactFileReader from 'react-file-reader';

class Upload extends Component {
  handleFiles = files => {
    var reader = new FileReader();
    reader.onload = (e) => {
      console.log(reader.result)
    }
    reader.readAsText(files[0]);
  }

  render() {
    return (
      <ReactFileReader handleFiles={this.handleFiles} fileTypes={'.csv'}>
        <button className='btn'>Upload</button>
      </ReactFileReader>
    );
  }
}

export default Upload
