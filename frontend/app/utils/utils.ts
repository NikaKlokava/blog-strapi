import * as Yup from "yup";
import qs from "qs";

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
      `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/${path}?populate=*`
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
      `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/${path}?populate=*`,
      { next: { revalidate: 100 } }
    );
    const result = await response?.json();
    return result?.data;
  } catch (error) {
    console.log(error);
  }
};

type Param = {
  urlParams?: any | {};
};

export const getPosts = async ({ urlParams }: Param) => {
  const queryString = qs.stringify(urlParams);

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/all-posts${
        queryString ? `?${queryString}` : "?populate=deep"
      }`,
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
