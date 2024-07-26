import css from "./VehicleDetails.module.css";

const correctedForm = (form) => {
  const formsMap = {
    fullyIntegrated: "Fully integrated",
    alcove: "Alcove",
    panelTruck: "Panel truck",
  };
  return formsMap[form] || form.charAt(0).toUpperCase() + form.slice(1);
};

const VehicleDetails = ({ camper }) => {
  const { form, length, width, height, tank, consumption } = camper;

  return (
    <div className={css.wrapper}>
      <h3 className={css.title}>Vehicle details</h3>
      <ul className={css.list}>
        <li className={css.item}>
          Form <span>{correctedForm(form)}</span>
        </li>
        <li className={css.item}>
          Length <span>{length}</span>
        </li>
        <li className={css.item}>
          Width <span>{width}</span>
        </li>
        <li className={css.item}>
          Height <span>{height}</span>
        </li>
        <li className={css.item}>
          Tank <span>{tank}</span>
        </li>
        <li className={css.item}>
          Consumption <span>{consumption}</span>
        </li>
      </ul>
    </div>
  );
};

export default VehicleDetails;
