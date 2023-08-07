import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/authContext";
import styled from "@emotion/styled";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 10px;
  text-align: left;

  input {
    width: max-content;
  }
  button {
    background: orange;
    border: none;
    font-size: 20px;
    padding: 5px;
  }

`;

const ErrorMessageStyled = styled(ErrorMessage)`

  color: red;
`;

const validationSchema = Yup.object().shape({
  day: Yup.number().required("Required").min(1, "Invalid day").max(31, "Invalid day"),
  month: Yup.number().required("Required").min(1, "Invalid month").max(12, "Invalid month"),
});

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  function handleSubmit(values) {
    console.log(values);
    login();

    const { day, month } = values;
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1; // Months are zero-based
    const currentDay = currentDate.getDate();

    const isBirthday = currentDay === parseInt(day) && currentMonth === parseInt(month);
    if (isBirthday) {
      navigate(`/happy`);
    } else {
      navigate(`/noHappy`);
    }
  }

  return (
    <Formik
      initialValues={{ day: "", month: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <FormStyled>
          <label htmlFor="day">Day of Birth:</label>
          <Field
            type="number"
            id="day"
            name="day"
            placeholder="Day"
          />
          <ErrorMessageStyled name="day" component="div" className="error" />

          <label htmlFor="month">Month of Birth:</label>
          <Field
            type="number"
            id="month"
            name="month"
            placeholder="Month"
          />
          <ErrorMessageStyled name="month" component="div" className="error" />

          <button type="submit">Login</button>
        </FormStyled>
      )}
    </Formik>
  );
};

export default Login;
