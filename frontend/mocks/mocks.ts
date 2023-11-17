import image1 from "../public/test_img1.jpg";
import image2 from "../public/test_img2.jpg";
import image3 from "../public/test_img3.jpg";
import logo1 from "../public/logo1.svg";
import logo2 from "../public/logo2.svg";
import logo3 from "../public/logo3.svg";

export const links = [
  {
    name: "linkedin",
    href: "https://www.linkedin.com/in/veranika-klokava-858b5b287",
  },
  { name: "github", href: "https://github.com/NikaKlokava" },
  { name: "instagram", href: "https://www.instagram.com/nika_klokava" },
];

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

export const sectionsData = [
  {
    name: "travel",
    logo: logo1,
    data: Array(10).fill({
      descr: "travel_img",
      photo: image1,
      
    }),
  },
  {
    name: "life",
    logo: logo2,
    data: Array(18).fill({
      descr: "travel_img",
      photo: image2,
      
    }),
  },
  {
    name: "styles",
    logo: logo3,
    data: Array(15).fill({
      descr: "travel_img",
      photo: image3,
    }),
  },
];
