import React, { useState } from "react";
import MainArea from "./components/MainArea";
import SideBar from "./components/SideBar";
import "./App.scss";

type AppState = {
  text: string;
  words: string[];
};

function App() {
  const [state, setState] = useState<AppState>({
    text: "",
    words: [],
  });

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
    const newWords = newText.match(/[a-zA-Z_-]+/g) || [];
    setState({
      text: newText,
      words: newWords,
    });
  };

  return (
    <div className="App">
      <h1>Word Counter</h1>
      <div className="container">
        <MainArea
          text={state.text}
          words={state.words}
          handleTextChange={handleTextChange}
        />
        <SideBar words={state.words} />
      </div>
    </div>
  );
}

export default App;
