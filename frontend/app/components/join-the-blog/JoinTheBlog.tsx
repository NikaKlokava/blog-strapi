"use client";

import styles from "./JoinTheBlog.module.css";
import { Formik, Form, Field } from "formik";

export const JoinTheBlog = () => {
  return (
    <Formik
      initialValues={{ data: "" }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(props) => (
        <div className={styles.form_wrapper}>
          <Form
            className={styles.form_container}
            onSubmit={(e) => {
              e.preventDefault();
              props.handleSubmit();
            }}
          >
            <h1>Join the blog!</h1>
            <Field
              placeholder="your name"
              autoComplete="off"
              type="text"
              as="input"
              name={"formikName"}
            />
            <Field
              placeholder="enter your email"
              autoComplete="off"
              type="email"
              as="input"
              name={"formikName"}
            />
          </Form>
        </div>
      )}
    </Formik>
  );
};
