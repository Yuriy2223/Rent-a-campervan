import { useState } from "react";
import css from "./SearchFormLocation.module.css";
import Icons from "../Icons/Icons";

const SearchFormLocation = () => {
  const [location, setLocation] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (event) => {
    setLocation(event.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className={css.location}>
      <label className={css.locationLabel}>Location</label>
      <div
        className={`${css.inputWrapper} ${
          isFocused ? css.locationInputHoverFocus : ""
        }`}
      >
        <Icons width={18} height={20} iconName="map" className={css.icon} />
        <input
          className={css.locationInput}
          type="text"
          value={location}
          placeholder="City"
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
    </div>
  );
};

export default SearchFormLocation;
