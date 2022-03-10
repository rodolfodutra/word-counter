import React, { Component } from 'react';
import './InformationBar.scss';

class InformationBar extends Component {
  render() {
    const text = this.props.text 
    const charCount = text.length
    const wordCount = text.match(/[0-9a-zA-Z]+/g)?.length || 0

    return (
      <div className='InformationBar'>
        <div>
          <p className='info-title'>WORDS</p>
          <p className='info-number'>{wordCount}</p>
        </div>
        <div>
          <p className='info-title'>CHARACTERS</p>
          <p className='info-number'>{charCount}</p>
        </div>
      </div>
    );
  }
}

export default InformationBar;