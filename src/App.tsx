import React from "react";
import FigureChoice from "./Components/FigureChoice";
import Score from "./Components/Score";
import Rules from "./Components/Rules";
import { useSelector } from "react-redux";
import { AppState } from "./redux/Reducers/rootReducer";
import DieIsCast from "./Components/DieIsCast";

function App() {
  const gameData = useSelector(
    (state: AppState) => state.gameData
  );
  const pageToRender = gameData.player ? (
    <DieIsCast />
  ) : (
    <FigureChoice />
  );
  return (
    <div className="App">
      <div className="container">
        <Score />
        {gameData.computer ? null : pageToRender}
      </div>
      {gameData.computer ? pageToRender : null }
      <Rules />
    </div>
  );
}

export default App;
