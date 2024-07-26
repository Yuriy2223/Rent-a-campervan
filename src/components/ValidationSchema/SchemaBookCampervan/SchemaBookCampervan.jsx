import * as Yup from "yup";

const SchemaBookCampervan = Yup.object({
  name: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Name is required"),
  email: Yup.string()
    .min(10, "Too short!")
    .max(70, "Too long!")
    .email("Invalid email address")
    .required("Email is required"),
  bookingDate: Yup.string()
    .required("Booking date is required")
    .matches(/^\d{2}-\d{2}-\d{4}$/, "Date must be in the format dd-MM-yyyy")
    .test("is-valid-date", "Invalid date", value => {
      if (!value) return false;
      const [day, month, year] = value.split('-').map(Number);
      const date = new Date(year, month - 1, day);
      return date.getDate() === day && date.getMonth() === month - 1 && date.getFullYear() === year;
    }),
  comment: Yup.string()
    .min(10, "Comment is too short!")
    .max(1000, "Comment is too long!")
    .optional(),
});

export default SchemaBookCampervan;
