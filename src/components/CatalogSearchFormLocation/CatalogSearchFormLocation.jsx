import { useState } from "react";
import { Field, ErrorMessage, useFormikContext } from "formik";
import Icons from "../Icons/Icons";
import css from "./CatalogSearchFormLocation.module.css";

const CatalogSearchFormLocation = () => {
  const [isFocused, setIsFocused] = useState(false);
  const { setFieldTouched } = useFormikContext();

  const handleFocus = () => {
    setIsFocused(true);
    setFieldTouched("location", false);
  };

  const handleBlur = async () => {
    setIsFocused(false);
    const fieldName = event.target.name;
    setFieldTouched(fieldName, true, true);
  };

  return (
    <div className={css.location}>
      <label className={css.locationLabel} htmlFor="location">
        Location
      </label>
      <div
        className={`${css.inputWrapper} ${
          isFocused ? css.locationInputHoverFocus : ""
        }`}
      >
        <Icons width={18} height={20} iconName="map" className={css.icon} />
        <Field
          className={css.locationInput}
          type="text"
          name="location"
          placeholder="City"
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
      <ErrorMessage className={css.error} name="location" component="span" />
    </div>
  );
};

export default CatalogSearchFormLocation;
