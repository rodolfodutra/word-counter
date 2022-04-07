import React, { Component } from 'react';
import './InformationBar.scss';

type InformationBarProps = {
  text: string, 
  words: string[]
}

class InformationBar extends Component<InformationBarProps> {
  render() {  
    const charCount = this.props.text.length
    const wordCount = this.props.words?.length

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