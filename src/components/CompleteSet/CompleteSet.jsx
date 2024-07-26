import Icons from "../Icons/Icons";
import css from "./CompleteSet.module.css";

const CompleteSet = ({
  camper: {
    adults,
    transmission,
    engine,
    details: { airConditioner, kitchen, beds, CD, radio, hob },
  },
}) => {
  return (
    <ul className={css.list}>
      {adults > 0 && (
        <li className={css.item}>
          <Icons className={css.icon} iconName="people" />
          {adults} {adults === 1 ? "adult" : "adults"}
        </li>
      )}
      {transmission && (
        <li className={css.item}>
          <Icons className={css.icon} iconName="automatic" />
          {transmission.charAt(0).toUpperCase() + transmission.slice(1)}
        </li>
      )}
      {airConditioner > 0 && (
        <li className={css.item}>
          <Icons className={css.icon} iconName="ac" />
          AC
        </li>
      )}
      {engine && (
        <li className={css.item}>
          <Icons className={css.icon} iconName="petrol" />
          {engine.charAt(0).toUpperCase() + engine.slice(1)}
        </li>
      )}
      {kitchen > 0 && (
        <li className={css.item}>
          <Icons className={css.icon} iconName="kitchen" />
          {kitchen === 1 ? "Kitchen" : `${kitchen} kitchen`}
        </li>
      )}
      {beds > 0 && (
        <li className={css.item}>
          <Icons className={css.icon} iconName="bed" />
          {beds} {beds === 1 ? "bed" : "beds"}
        </li>
      )}
      {airConditioner > 0 && (
        <li className={css.item}>
          <Icons className={css.icon} iconName="conditioner" />
          {airConditioner} air conditioner
        </li>
      )}
      {CD > 0 && (
        <li className={css.item}>
          <Icons className={css.icon} iconName="cd" />
          CD
        </li>
      )}
      {radio > 0 && (
        <li className={css.item}>
          <Icons className={css.icon} iconName="radio" />
          Radio
        </li>
      )}
      {hob > 0 && (
        <li className={css.item}>
          <Icons className={css.icon} iconName="hob" />
          {hob === 1 ? "Hob" : `${hob} hob`}
        </li>
      )}
    </ul>
  );
};

export default CompleteSet;
