import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is a required field")
    .min(3, "Name is too short"),
  email: Yup.string().required("Email is a required field").email(),
});
export const initialFormValue = { name: "", email: "" };

export const getData = async (path: string) => {
  try {
    const response = await fetch(
      `${process.env.STRAPI_API_URL}/api/${path}?populate=*`
    );
    const result = await response.json();
    return result?.data[0];
  } catch (error) {
    console.log(error);
  }
};

export const getDataArr = async (path: string) => {
  try {
    const response = await fetch(
      `${process.env.STRAPI_API_URL}/api/${path}?populate=*`,
      { next: { revalidate: 100 } }
    );
    const result = await response?.json();
    return result?.data;
  } catch (error) {
    console.log(error);
  }
};

export const getPosts = async () => {
  try {
    const response = await fetch(
      `${process.env.STRAPI_API_URL}/api/all-posts?populate=deep`,
      { next: { revalidate: 100 } }
    );
    const result = await response?.json();
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

export const navbarItems = [
  {
    name: "HOME",
    path: "/",
  },
  {
    name: "TRAVEL",
    path: "/sections/travel",
  },
  {
    name: "LIFE",
    path: "/sections/life",
  },
  {
    name: "STYLES",
    path: "/sections/styles",
  },

  {
    name: "THE BEST",
    path: "/the-best",
  },
  {
    name: "INSTA AESTHETICS",
    path: "/insta-aesthetics",
  },
  {
    name: "ABOUT",
    path: "/about",
  },
];
