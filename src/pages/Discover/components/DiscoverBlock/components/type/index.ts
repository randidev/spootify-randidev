export type TDiscoverBlockProps = {
  text: string;
  id: string;
  data: Array<{
    images: any;
    name: string;
  }>;
  imagesKey?: string;
  loading?: boolean;
};

export type TDiscoverItemProps = {
  images: Array<{
    url: string;
  }>;
  name: string;
};
