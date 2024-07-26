import * as Yup from "yup";

const SchemaLocation = Yup.object().shape({
  location: Yup.string()
    .min(3, "The city name is too short!")
    .max(50, "The city name is too long!")
    .matches(
      /^[a-zA-Z\s']+$/,
      "Invalid characters in the city name."
    ),
});

export default SchemaLocation;
