import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../redux/Reducers/rootReducer";
import Figure from "../Figure";
import getWinner from "../../Functions/getWinner";
import { winAction, lossAction } from "../../redux/Actions/scoreActions";
import { clearDataAction } from "../../redux/Actions/gameDataActions";
import { setWinnerAction } from "../../redux/Actions/setwinnerActions";

const DieIsCast: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  // забираем из redux данные игры и победтеля
  const { gameData, winner } = useSelector((state: AppState) => state);
  // используем useEffect при изменении данных игры (если и игрок, и компьютер сделали выбор, оределяяем победителя)
  useEffect(() => {
    if (gameData.player && gameData.computer) {
      dispatch(setWinnerAction(getWinner(gameData.player, gameData.computer)));
    }
  }, [gameData, dispatch]);
  //  используем useEffect при изменении победителя (экшны для изменения счета)
  useEffect(() => {
    if (winner === "player") dispatch(winAction());
    if (winner === "computer") dispatch(lossAction());
  }, [winner, dispatch]);
  // при нажатии на кнопку restart очищаем данные игры и ставим состояние победителя в ожидание
  const handleRestartButton = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>): void => {
      dispatch(clearDataAction());
      dispatch(setWinnerAction("pending"));
    },
    [dispatch]
  );
  // т к для отрисовки круглых значков привязывала обработчики на 1 экране, тут тоже пришлось закинуть какой-то обработчик
  const handleFigure = useCallback(
    (event: React.MouseEvent<HTMLDivElement>): void => {
      event.preventDefault();
    },
    []
  );
  return (
    <div className="selected">
      <div className="selected__items">
        {Object.entries(gameData).map((item) => (
          <div className="selected__item" key={item[0]}>
            <h3 className="selected__title">
              {item[0] === "player" ? "you picked" : "the house picked"}
            </h3>
            <Figure
              type={item[1]}
              className={"figure__img"}
              onClick={handleFigure}
              big={true}
            />
          </div>
        ))}
      </div>
      {winner === "pending" ? null : (
        <div className="selected__result">
          <h2 className="selected__result-title">
            {winner === "player"
              ? "you win"
              : winner === "computer"
              ? "you lose"
              : "draw"}
          </h2>
          <button onClick={handleRestartButton} className="restart">
            play again
          </button>
        </div>
      )}
    </div>
  );
};
export default DieIsCast;
