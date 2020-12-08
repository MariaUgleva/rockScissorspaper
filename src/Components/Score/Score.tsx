import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/Reducers/rootReducer";
// комонент отображения счета
const Score: React.FC = (): JSX.Element => {
  const score = useSelector((state: AppState) => state.score);
  return (
    <div className="score">
      <img src="../../images/logo.svg" alt="" className="logo" />
      <div className="score__info">
        <span className="score__info-title">Score</span>
        <span className="score__info-number">{score}</span>
      </div>
    </div>
  );
};
export default Score;
