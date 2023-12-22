import image1 from "../public/test_img1.jpg";
import image2 from "../public/test_img2.jpg";
import image3 from "../public/test_img3.jpg";
import image4 from "../public/test_img4.jpg";
import image5 from "../public/test_img5.jpg";
import image6 from "../public/test_img6.jpg";
import back from "../public/back.jpg";

import instagram from "../public/instagram.svg";
import linkedin from "../public/linkedin.svg";
import github from "../public/github.svg";

export const mockLinks: FooterLinks = [
  {
    id: "asb",
    attributes: {
      name: "linkedin",
      href: "https://www.linkedin.com/in/veranika-klokava-858b5b287",
      svg: linkedin,
    },
  },

  {
    id: "dfsdf",
    attributes: {
      name: "github",
      href: "https://github.com/NikaKlokava",
      svg: github,
    },
  },
  {
    id: "dff",
    attributes: {
      name: "instagram",
      href: "https://www.instagram.com/nika_klokava",
      svg: instagram,
    },
  },
];

export const postsMockData: Post[] = [
  {
    section: "styles",
    title: "Style title example 3",
    date: "16 October 2022",
    photo: image3,
    best_status: true,
    post_contents: {
      data: [
        {
          id: 555,
          attributes: {
            title: "some title",
            description: `Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna`,
            photos: [image2, image3, image6, image1],
          },
        },
        {
          id: 555,
          attributes: {
            title: "some title",
            description: `Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna`,
            photos: [image6, image1, image2, image3],
          },
        },
        {
          id: 555,
          attributes: {
            title: "some title",
            description: `Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna`,
            photos: [image2, image6, image1, image3, image6, image1],
          },
        },
      ],
    },
  },
  {
    section: "travel",
    title: "Travel title example 2",
    date: "16 October 2022",
    photo: image1,
    best_status: true,
    post_contents: {
      data: [
        {
          id: 555,
          attributes: {
            title: "some title",
            description: `Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna`,
            photos: [image3, image6, image1],
          },
        },
      ],
    },
  },
  {
    section: "styles",
    title: "Style title example ",
    date: "16 October 2022",
    photo: image3,
    best_status: false,
    post_contents: {
      data: [
        {
          id: 555,
          attributes: {
            title: "some title",
            description: `Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna. sed do eiusmod tempor incididunt ut
        labore et dolore magna. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna`,
            photos: [image3, image1],
          },
        },
        {
          id: 555,
          attributes: {
            title: "some title",
            description: `Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna. sed do eiusmod tempor incididunt ut
        labore et dolore magna. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna`,
            photos: [image3, image1],
          },
        },
        {
          id: 555,
          attributes: {
            title: "some title",
            description: `Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna. sed do eiusmod tempor incididunt ut
        labore et dolore magna. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna`,
            photos: [image3, image5],
          },
        },
      ],
    },
  },
  {
    section: "styles",
    title: "Styles title example 2",
    date: "16 October 2022",
    photo: image3,
    best_status: false,
    post_contents: {
      data: [
        {
          id: 555,
          attributes: {
            title: "some title",
            description: `Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna. sed do eiusmod tempor incididunt ut
        labore et dolore magna. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna`,
            photos: [image3],
          },
        },
        {
          id: 555,
          attributes: {
            title: "some title",
            description: `Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna. sed do eiusmod tempor incididunt ut
        labore et dolore magna. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna`,
            photos: [image3, image1],
          },
        },
        {
          id: 555,
          attributes: {
            title: "some title",
            description: `Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna. sed do eiusmod tempor incididunt ut
        labore et dolore magna. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna`,
            photos: [image3, image5],
          },
        },
      ],
    },
  },
  {
    section: "life",
    title: "Life title example ",
    date: "16 October 2022",
    photo: image2,
    best_status: false,
    post_contents: {
      data: [
        {
          id: 555,
          attributes: {
            title: "some title",
            description: `Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna. sed do eiusmod tempor incididunt ut
        labore et dolore magna. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna`,
            photos: [image3, image1, image4],
          },
        },
        {
          id: 555,
          attributes: {
            title: "some title",
            description: `Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna. sed do eiusmod tempor incididunt ut
        labore et dolore magna. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna`,
            photos: [image1],
          },
        },
        {
          id: 555,
          attributes: {
            title: "some title",
            description: `Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna.`,
            photos: [image1, image5, image2],
          },
        },
        {
          id: 555,
          attributes: {
            title: "some title",
            description: `Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna. sed do eiusmod tempor incididunt ut
        labore et dolore magna. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna`,
            photos: [image3, image5],
          },
        },
      ],
    },
  },
  {
    section: "life",
    title: "Life title example 2",
    date: "16 October 2022",
    photo: image2,
    best_status: false,
    post_contents: {
      data: [
        {
          id: 555,
          attributes: {
            title: "some title",
            description: `Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna. sed do eiusmod tempor incididunt ut
        labore et dolore magna. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna`,
            photos: [image3, image1, image4],
          },
        },
        {
          id: 555,
          attributes: {
            title: "some title",
            description: `Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna. sed do eiusmod tempor incididunt ut
        labore et dolore magna. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna`,
            photos: [image1],
          },
        },
        {
          id: 555,
          attributes: {
            title: "some title",
            description: `Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna. sed do eiusmod tempor incididunt ut
        labore et dolore magna. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna`,
            photos: [image3, image5],
          },
        },
      ],
    },
  },
];

export const aboutMockData: AboutData = {
  id: 12345,
  attributes: {
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
  },
};

export const wishListMockData: WishListData = Array(10).fill({
  id: "123",
  attributes: {
    href: "https://www.zara.com/lt/lt/%E2%80%9Ezw-collection--pavilkinio-stiliaus-suknele-su-zvyneliais-p09204110.html?v1=307074382&v2=2317646",
    photo: image5,
  },
});

export const instaAestheticData: AestheticsData = Array(9).fill({
  id: 3456,
  attributes: {
    photo: image6,
    description: `Lorem ipsum dolor sit amet, consectetur
    adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi. Lorem ipsum dolor sit amet, consectetur
    adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi. Lorem ipsum dolor sit amet, consectetur
    adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi`,
    date: "14th October 2023",
    location: "Vancouver",
    tags: {
      data: [
        {
          id: 222,
          attributes: { tag: "#travel" },
        },
        {
          id: 222,
          attributes: { tag: "#aesthetics" },
        },
        {
          id: 222,
          attributes: { tag: "#life" },
        },
        {
          id: 222,
          attributes: { tag: "#blog" },
        },
      ],
    },
  },
});

export const homeMockData: HomeData = {
  id: 123,
  attributes: {
    title: "Hello from TRAVELER!",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
  fugit, aliquam animi nostrum repudiandae non quibusdam. Commodi,
  blanditiis, mollitia eaque reprehenderit fugiat, aut facere dolorem
  voluptatum a nulla ut. Iure? Lorem ipsum dolor sit amet consectetur
  adipisicing elit. Temporibus fugit, aliquam animi nostrum repudiandae
  non quibusdam. Commodi, blanditiis, mollitia eaque reprehenderit fugiat,
  aut facere dolorem voluptatum a nulla ut. Iure?`,
    background: back,
  },
};
