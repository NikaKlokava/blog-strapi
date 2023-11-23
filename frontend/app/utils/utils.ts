import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is a required field")
    .min(3, "Name is too short"),
  email: Yup.string().required("Email is a required field").email(),
});
export const initialFormValue = { name: "", email: "" };

