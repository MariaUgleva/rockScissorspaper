import React, { useCallback } from "react";
import Figure from "../Figure";
import { useDispatch } from "react-redux";
import { sagaAction } from "../../redux/Actions/gameDataActions";
// 1-ый экран (выбор игроком фигуры)
const FigureChoice: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  // при нажатии на одну из фигур отправляем экшн
  const handleFigure = useCallback(
    (event: React.MouseEvent<HTMLDivElement>): void => {
      dispatch(sagaAction({ player: event.currentTarget.id }));
    },
    [dispatch]
  );
  return (
    <div className="figures">
      <div className="figure__wrapper-1">
        <Figure
          type="paper"
          className="figure__img"
          onClick={handleFigure}
          big={false}
        />
      </div>
      <div className="figure__wrapper-2">
        <Figure
          type="scissors"
          className="figure__img"
          onClick={handleFigure}
          big={false}
        />
      </div>
      <div className="figure__wrapper-3">
        <Figure
          type="rock"
          className="figure__img"
          onClick={handleFigure}
          big={false}
        />
      </div>
    </div>
  );
};
export default FigureChoice;
