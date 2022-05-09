import React, { Component } from "react";

type SideBarProps = {
  words: string[]
}

type WordValue = {
  word: string;
  count: number
}

class SideBar extends Component<SideBarProps> {
  /**
   * Creates a sorted array of word objects.
   * Each word object includes number of
   * times the word(lowercased) occured,
   * with format: {word: STRING, count: INTEGER }
   *
   * @returns {Array}
   */
  createWordList() {
    let wordList: WordValue[] = [];

    this.props.words.forEach((word) => {
      const wordObj: WordValue | undefined = wordList.find(
        (wordObj) => wordObj.word === word.toLowerCase()
      );
      if (wordObj) wordObj.count++;
      else wordList.push({ word: word.toLowerCase(), count: 1 });
    });
    return wordList.sort((a, b) => b.count - a.count);
  }

  render() {
    const wordList = this.createWordList();

    const wordElements = wordList.map(({ word, count }) => {
      return (
        <li key={word}>
          {word} ({count})
        </li>
      );
    });

    return (
      <div>
        <h3>Words List</h3>
        <ul>{wordElements}</ul>
      </div>
    );
  }
}

export default SideBar;
