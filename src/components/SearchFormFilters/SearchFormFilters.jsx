import { useState } from "react";
import Icons from "../Icons/Icons";
import css from "./SearchFormFilters.module.css";

const SearchFormFilters = () => {
  const [selectedFilter, setSelectedFilter] = useState(null);

  const handleClick = (filterName) => {
    setSelectedFilter((prevFilter) =>
      prevFilter === filterName ? null : filterName
    );
  };

  const filterButtons = [
    { name: "cd", label: "CD" },
    { name: "automatic", label: "Automatic" },
    { name: "kitchen", label: "Kitchen" },
    { name: "tv", label: "TV" },
    { name: "shower", label: "Shower/WC" },
  ];

  return (
    <div className={css.filters}>
      <h3 className={css.title}>Filters</h3>
      <p className={css.subTitle}>Vehicle equipment</p>
      <ul className={css.list}>
        {filterButtons.map((filter) => (
          <li key={filter.name}>
            <button
              type="radio"
              name={`details.${filter.name}`}
              value={filter.name}
              className={`${css.btn} ${
                selectedFilter === filter.name ? css.uselected : ""
              }`}
              onClick={() => handleClick(filter.name)}
            >
              <Icons
                width={32}
                height={32}
                iconName={filter.name}
                className={css.icon}
              />
              {filter.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchFormFilters;
