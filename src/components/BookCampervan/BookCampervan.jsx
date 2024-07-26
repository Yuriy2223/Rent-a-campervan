import { useState } from "react";
import { Formik, Form, Field } from "formik";
import DatePicker from "react-datepicker";
import toast from "react-hot-toast";
import "react-datepicker/dist/react-datepicker.css";
import Icons from "../Icons/Icons";
import css from "./BookCampervan.module.css";
import SchemaBookCampervan from "../ValidationSchema/SchemaBookCampervan/SchemaBookCampervan";
import FormError from "../FormError/FormError";

const BookCampervan = () => {
  const [calendarOpen, setCalendarOpen] = useState(false);

  const handleDateChange = (date, setFieldValue) => {
    setFieldValue(
      "bookingDate",
      date
        ? `${date.getDate().toString().padStart(2, "0")}-${(date.getMonth() + 1)
            .toString()
            .padStart(2, "0")}-${date.getFullYear()}`
        : ""
    );
    setCalendarOpen(false);
  };

  const handleCalendarToggle = () => {
    setCalendarOpen(!calendarOpen);
  };

  const handleSubmit = (values, { resetForm }) => {
    toast.success("Your booking request has been submitted successfully!");
    resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        bookingDate: "",
        comment: "",
      }}
      validationSchema={SchemaBookCampervan}
      onSubmit={handleSubmit}
      validateOnBlur={true}
    >
      {({ setFieldValue, values, setFieldTouched }) => (
        <Form className={css.form}>
          <h3 className={css.title}>Book your campervan now</h3>
          <p className={css.text}>
            Stay connected! We are always ready to help you.
          </p>

          <div className={css.relative}>
            <Field
              className={css.input}
              name="name"
              placeholder="Name"
              type="text"
              onFocus={() => setFieldTouched("name", false)}
              onBlur={() => setFieldTouched("name", true)}
            />
            <FormError name="name" />
          </div>

          <div className={css.relative}>
            <Field
              className={css.input}
              name="email"
              placeholder="Email"
              type="email"
              onFocus={() => setFieldTouched("email", false)}
              onBlur={() => setFieldTouched("email", true)}
            />
            <FormError name="email" />
          </div>

          <div className={`${css.dateInputWrapper} ${css.relative}`}>
            <DatePicker
              selected={
                values.bookingDate
                  ? new Date(values.bookingDate.split("-").reverse().join("-"))
                  : null
              }
              onChange={(date) => handleDateChange(date, setFieldValue)}
              dateFormat="dd-MM-yyyy"
              placeholderText="Booking date"
              className={css.dateInput}
              open={calendarOpen}
              onFocus={() => setFieldTouched("bookingDate", false)}
              onBlur={() => setFieldTouched("bookingDate", true)}
            />
            <button
              className={css.calendarBtn}
              type="button"
              onClick={handleCalendarToggle}
            >
              <Icons
                className={css.calendarIcon}
                width={20}
                height={20}
                iconName="calendar"
              />
            </button>
            <FormError name="bookingDate" />
          </div>

          <div className={css.relative}>
            <Field
              className={css.inputComment}
              name="comment"
              placeholder="Comment"
              as="textarea"
              onFocus={() => setFieldTouched("comment", false)}
              onBlur={() => setFieldTouched("comment", true)}
            />
            <FormError name="comment" />
          </div>

          <button className={css.button} type="submit">
            Send
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default BookCampervan;
