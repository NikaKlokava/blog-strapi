import image1 from "../public/test_img1.jpg";
import image2 from "../public/test_img2.jpg";
import image3 from "../public/test_img3.jpg";
import image4 from "../public/test_img4.jpg";
import image5 from "../public/test_img5.jpg";
import image6 from "../public/test_img6.jpg";

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
type Data = {
  id: string;
  name: string;
  descr: string;
  title: string;
  date: string;
  photo: any;
  content: {
    description: string;
    photos: any[];
  }[];
};

export const sectionsData: Data[] = [
  {
    id: "123dsaaa",
    name: "travel",
    descr: "travel_img",
    title: "Some title example",
    date: "16 October 2022",
    photo: image1,
    content: [
      {
        description: `Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna`,
        photos: [image2, image3, image6, image1],
      },
    ],
  },
  {
    id: "1234dvcad",
    name: "life",
    descr: "life_img",
    title: "Some title example",
    date: "16 October 2022",
    photo: image2,
    content: [
      {
        description: `Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna`,
        photos: [image2, image3, image6, image1],
      },
    ],
  },
  {
    id: "123sdvadsa",
    name: "styles",
    descr: "styles_img",
    title: "Some title example",
    date: "16 October 2022",
    photo: image3,
    content: [
      {
        description: `Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna`,
        photos: [image2, image3, image6, image1],
      },
    ],
  },
];

// export const sectionsData: Data[] = [
//   {
//     name: "travel",
//     logo: logo1,
//     data: Array(10).fill({
//       name: "travel",
//       descr: "travel_img",
//       title: "Some title example",
//       date: "16 October 2022",
//       photo: image1,
//       content: [
//         {
//           description: `Lorem ipsum dolor sit amet, consectetur
//           adipiscing elit, sed do eiusmod tempor incididunt ut
//           labore et dolore magna`,
//           photos: [image2, image3, image6, image1],
//         },
//       ],
//     }),
//   },
//   {
//     name: "life",
//     logo: logo2,
//     data: Array(18).fill({
//       name: "life",
//       descr: "travel_img",
//       title: "Some title example",
//       date: "14 October 2022",
//       photo: image2,
//     }),
//   },
//   {
//     name: "styles",
//     logo: logo3,
//     data: Array(15).fill({
//       name: "styles",
//       descr: "travel_img",
//       title: "Some title example",
//       date: "15 October 2022",
//       photo: image3,
//     }),
//   },
// ];

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

type WishListType = {
  href: string;
  photo: any;
};
export const wishListData: WishListType[] = Array(10).fill({
  href: "https://www.zara.com/lt/lt/%E2%80%9Ezw-collection--pavilkinio-stiliaus-suknele-su-zvyneliais-p09204110.html?v1=307074382&v2=2317646",
  photo: image5,
});

export type InstaAestheticType = {
  photo: any;
  description: string;
  date: string;
  location: string;
  tags: string[];
};

export const instaAestheticData: InstaAestheticType[] = Array(9).fill({
  photo: image6,
  description: `Lorem ipsum dolor sit amet, consectetur
  adipiscing elit, sed do eiusmod tempor incididunt ut
  labore et dolore magna aliqua. Ut enim ad minim veniam,
  quis nostrud exercitation ullamco laboris nisi`,
  date: "14th October 2023",
  location: "Vancouver",
  tags: ["#travel", "#aesthetics", "#life", "#blog"],
});
