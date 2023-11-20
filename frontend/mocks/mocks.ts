import image1 from "../public/test_img1.jpg";
import image2 from "../public/test_img2.jpg";
import image3 from "../public/test_img3.jpg";
import image4 from "../public/test_img4.jpg";
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
      section: "travel",
      descr: "travel_img",
      photo: image1,
    }),
  },
  {
    name: "life",
    logo: logo2,
    data: Array(18).fill({
      section: "life",
      descr: "travel_img",
      photo: image2,
    }),
  },
  {
    name: "styles",
    logo: logo3,
    data: Array(15).fill({
      section: "styles",
      descr: "travel_img",
      photo: image3,
    }),
  },
];

export const aboutData = {
  greeting: "Welcome to my blog!",
  description: `At vero eos et accusamus et iusto odio dignissimos 
    ducimus qui blanditiis praesentium voluptatum deleniti 
    atque corrupti quos dolores et quas molestias excepturi sint occaecati 
    cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia 
    animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est 
    et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio 
    cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas 
    assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis 
    aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non 
    recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis 
    voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat`,
  photo: image4,
};
