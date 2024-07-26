import { Field } from "formik";
import Icons from "../Icons/Icons";
import css from "./CatalogSearchFormFilters.module.css";

const CatalogSearchFormFilters = ({ values, setFieldValue }) => {
  return (
    <div className={css.filters}>
      <h3 className={css.titleFilters}>Filters</h3>
      <p className={css.subTitleFilters}>Vehicle equipment</p>
      <ul className={css.listFilters}>
        <li>
          <label
            className={`${css.checkboxLabel} ${
              values.details.airConditioner ? css.selected : ""
            }`}
          >
            <Field
              type="checkbox"
              name="details.airConditioner"
              checked={values.details.airConditioner}
              onChange={({ target: { checked } }) =>
                setFieldValue("details.airConditioner", checked ? 1 : 0)
              }
            />
            <Icons
              width={32}
              height={32}
              iconName="ac"
              className={css.iconFilter}
            />
            AC
          </label>
        </li>
        <li>
          <label
            className={`${css.checkboxLabel} ${
              values.transmission === "automatic" ? css.selected : ""
            }`}
          >
            <Field
              type="checkbox"
              name="transmission"
              value="automatic"
              checked={values.transmission === "automatic"}
              onChange={({ target: { checked } }) => {
                const newTransmission = checked ? "automatic" : "";
                setFieldValue("transmission", newTransmission);
              }}
            />
            <Icons
              width={32}
              height={32}
              iconName="automatic"
              className={css.iconFilter}
            />
            Automatic
          </label>
        </li>

        <li>
          <label
            className={`${css.checkboxLabel} ${
              values.details.kitchen ? css.selected : ""
            }`}
          >
            <Field
              type="checkbox"
              name="details.kitchen"
              checked={values.details.kitchen}
              onChange={({ target: { checked } }) =>
                setFieldValue("details.kitchen", checked ? 1 : 0)
              }
            />
            <Icons
              width={32}
              height={32}
              iconName="kitchen"
              className={css.iconFilter}
            />
            Kitchen
          </label>
        </li>
        <li>
          <label
            className={`${css.checkboxLabel} ${
              values.details.TV ? css.selected : ""
            }`}
          >
            <Field
              type="checkbox"
              name="details.TV"
              checked={values.details.TV}
              onChange={({ target: { checked } }) =>
                setFieldValue("details.TV", checked ? 1 : 0)
              }
            />
            <Icons
              width={32}
              height={32}
              iconName="tv"
              className={css.iconFilter}
            />
            TV
          </label>
        </li>
        <li>
          <label
            className={`${css.checkboxLabel} ${
              values.details.shower ? css.selected : ""
            }`}
          >
            <Field
              type="checkbox"
              name="details.shower"
              checked={values.details.shower}
              onChange={({ target: { checked } }) =>
                setFieldValue("details.shower", checked ? 1 : 0)
              }
            />
            <Icons
              width={32}
              height={32}
              iconName="shower"
              className={css.iconFilter}
            />
            Shower/WC
          </label>
        </li>
      </ul>
    </div>
  );
};

export default CatalogSearchFormFilters;
