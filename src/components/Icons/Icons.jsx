import sprite from "../../assets/sprite/sprite.svg";

const Icons = ({ width, height, iconName, className }) => {
  return (
    <svg width={width} height={height} className={className}>
      <use href={`${sprite}#${iconName}`}></use>
    </svg>
  );
};

export default Icons;
