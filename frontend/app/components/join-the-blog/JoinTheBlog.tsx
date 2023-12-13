"use client";

import styles from "./JoinTheBlog.module.css";
import { Formik, Form, Field } from "formik";
import { initialFormValue, validationSchema } from "@/app/utils/utils";
import classes from "classnames";
import { useState } from "react";

type Props = {
  extraClass?: string;
};

export const JoinTheBlog = ({ extraClass }: Props) => {
  const [success, setSuccess] = useState<boolean>();

  const onSubmit = async (values: { name: string; email: string }) => {
    try {
      const data = await fetch("http://localhost:1337" + `/api/followers`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + process.env,
        },
        body: JSON.stringify({
          data: values,
        }),
      });
      data.ok ? setSuccess(true) : setSuccess(false);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Formik
      initialValues={initialFormValue}
      validationSchema={validationSchema}
      onSubmit={(values) => onSubmit(values)}
    >
      {(props) => (
        <div
          className={classes(
            styles.form_wrapper,
            extraClass && styles[extraClass]
          )}
        >
          <Form
            className={styles.form_container}
            onSubmit={(e) => {
              e.preventDefault();
              props.handleSubmit();
            }}
          >
            {success !== undefined && (
              <div className={styles.status_container}>
                <div>
                  {success ? "Success!" : "You have already join my blog!"}
                </div>
                <button
                  className={styles.style_btn}
                  onClick={() => {
                    setSuccess(undefined);
                    props.handleReset();
                  }}
                >
                  Ok
                </button>
              </div>
            )}

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
            {props.errors.name && props.dirty && <div>{props.errors.name}</div>}
            <button className={styles.style_btn} type="submit">
              Submit
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};
