import { Field } from "formik";
import Icons from "../Icons/Icons";
import css from "./CatalogSearchFormType.module.css";

const CatalogSearchFormType = ({ camperTypes, values }) => {
  return (
    <div className={css.type}>
      <h3 className={css.title}>Vehicle type</h3>
      <ul className={css.list}>
        {camperTypes.map((type) => (
          <li key={type.name}>
            <label
              className={`${css.radioLabel} ${
                values.form === type.name ? css.selected : ""
              } ${type.name === "fullyIntegrated" ? css.specialType : ""}`}
            >
              <Field type="radio" name="form" value={type.name} />
              <Icons
                width={40}
                height={28}
                iconName={type.iconName}
                className={css.iconRadio}
              />
              <span
                className={
                  type.name === "fullyIntegrated"
                    ? css.specialSpanTypeLabel
                    : ""
                }
              >
                {type.nameLabel}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CatalogSearchFormType;
