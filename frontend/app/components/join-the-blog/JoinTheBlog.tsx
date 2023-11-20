"use client";

import styles from "./JoinTheBlog.module.css";
import { Formik, Form, Field } from "formik";
import { initialFormValue, validationSchema } from "@/app/utils/utils";

export const JoinTheBlog = () => {
  return (
    <Formik
      initialValues={initialFormValue}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        alert("Success");
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
            <h1 className={styles.title}>Join the blog!</h1>
            <div className={styles.input_container}>
              <Field
                placeholder="your name"
                autoComplete="off"
                type="text"
                as="input"
                name={"name"}
                className={styles.input_field}
              />
              <Field
                placeholder="enter your email"
                autoComplete="off"
                type="email"
                as="input"
                name={"email"}
                className={styles.input_field}
              />
            </div>
            {props.errors.name && <div>{props.errors.name}</div>}
            {props.errors.email && <div>{props.errors.email}</div>}
            <button className={styles.submit_btn} type="submit">
              Submit
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};
