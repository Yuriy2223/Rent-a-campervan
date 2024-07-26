import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Form, Formik } from "formik";
import {
  setDetails,
  setForm,
  setTransmission,
  setLocation,
  clearFilters,
  selectFilter,
} from "../../redux/filters/slice";
import SchemaLocation from "../ValidationSchema/SchemaLocation/SchemaLocation";
import CatalogSearchFormLocation from "../CatalogSearchFormLocation/CatalogSearchFormLocation";
import CatalogSearchFormFilters from "../CatalogSearchFormFilters/CatalogSearchFormFilters";
import CatalogSearchFormType from "../CatalogSearchFormType/CatalogSearchFormType";
import css from "./CatalogSearchForm.module.css";

const CatalogSearchForm = () => {
  const dispatch = useDispatch();
  const {
    location,
    form,
    transmission,
    details: { airConditioner, kitchen, TV, shower },
  } = useSelector(selectFilter);

  const initialValues = {
    location: location,
    form: form,
    transmission: transmission,
    details: {
      airConditioner: airConditioner,
      kitchen: kitchen,
      TV: TV,
      shower: shower,
    },
  };

  const handleSubmit = (values, actions) => {
    dispatch(setLocation(values.location));
    dispatch(setForm(values.form));
    dispatch(setTransmission(values.transmission));
    dispatch(setDetails(values.details));
    actions.resetForm();
  };

  const handleReset = (resetForm) => {
    dispatch(clearFilters());
    resetForm();
  };

  useEffect(() => {
    return () => {
      dispatch(clearFilters());
    };
  }, [dispatch]);

  const camperTypes = [
    { name: "panelTruck", iconName: "camper3", nameLabel: "Van" },
    {
      name: "fullyIntegrated",
      iconName: "camper2",
      nameLabel: "Fully Integrated",
    },
    { name: "alcove", iconName: "camper", nameLabel: "Alcove" },
  ];

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SchemaLocation}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue, values, resetForm }) => (
        <Form className={css.searchForm}>
          <CatalogSearchFormLocation />
          <CatalogSearchFormFilters
            values={values}
            setFieldValue={setFieldValue}
          />
          <CatalogSearchFormType camperTypes={camperTypes} values={values} />
          <div className={css.containerBtn}>
            <button type="submit" className={css.btnSearch}>
              Search
            </button>
            <button
              type="button"
              className={css.btnReset}
              onClick={() => handleReset(resetForm)}
            >
              Reset
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default CatalogSearchForm;
