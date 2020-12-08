import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/Reducers/rootReducer";

type PropFigureType = {
  type: string;
  className: string;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
  big: boolean;
};
// вспомогательная обертка для анимации на выйгравшем значке
const WinnerWrapper: React.FC = ({ children }): JSX.Element => {
  return (
    <div className="winner__wrapper1">
      <div className="winner__wrapper2">
        <div className="winner__wrapper3">{children}</div>
      </div>
    </div>
  );
};
// отрисовка круглых значков
const Figure: React.FC<PropFigureType> = ({
  type,
  className,
  onClick,
  big,
}): JSX.Element => {
  // из redux берем данные и победителя
  const { gameData, winner } = useSelector((state: AppState) => state);
  // переменная для присвоения классов в зависимости от экрана отрисовки (маленькие/большие) и от типа (камень/ножницы/бумага)
  const classes = big
    ? type
      ? "figure figureBig " + type + "big"
      : "big_inactive"
    : "figure " + type;
    // если есть победитель и отрисовываемый тип (камень/ножницы/бумага) равен победителю, оборачиваем компонент во wrapperы
  if ((winner === "computer" || "player") && type === gameData[winner]) {
    return (
      <WinnerWrapper>
        <div className={classes} id={type} onClick={onClick}>
          <img
            src={`../../images/icon-${type}.svg`}
            alt=""
            className={className}
          />
        </div>
      </WinnerWrapper>
    );
  }

  return (
    <div className={classes} id={type} onClick={onClick}>
      <img src={`../../images/icon-${type}.svg`} alt="" className={className} />
    </div>
  );
};
export default Figure;
