declare type FooterLinks = {
  id: string;
  attributes: {
    name: string;
    href: string;
    svg: any;
  };
}[];

declare type AboutData = {
  id: number;
  attributes: {
    greeting: string;
    description: string;
    photo: any;
  };
};

declare type PostType = {
  description: string;
  location: string;
  date: string;
  photo: any;
  tags: {
    data: {
      id: number;
      attributes: {
        tag: string;
      };
    }[];
  };
};

declare type AestheticsData = {
  id: number;
  attributes: PostType;
}[];

declare type HomeData = {
  id: number;
  attributes: {
    title: string;
    description: string;
    background: any;
  };
};
WishListData;

declare type WishListData = {
  id: string;
  attributes: {
    href: string;
    photo: any;
  };
}[];

declare type PostData = {
  id: number;
  attributes: Post;
};

declare type PostsData = PostData[];

declare type Post = {
  section: string;
  title: string;
  date: string;
  best_status: boolean;
  photo: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
  post_contents: {
    data: {
      id: number;
      attributes: {
        description: string;
        title: string;
        photos: {
          data: {
            id: number;
            attributes: {
              url: string;
              formats: any;
            };
          }[];
        };
      };
    }[];
  };
};
