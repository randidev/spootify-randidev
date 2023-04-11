export interface IItemImages {
  height: number;
  url: string;
  width: number;
}

export interface INewRelease {
  albums: {
    href: string;
    items: Array<{
      album_group: string;
      album_type: string;
      artists: Array<{
        external_urls: {
          spotify: string;
        };
        href: string;
        id: string;
        name: string;
        type: string;
        uri: string;
      }>;
      available_markets: string[];
      external_urls: {
        spotify: string;
      };
      href: string;
      id: string;
      images: Array<IItemImages>;
      name: string;
      release_date: string;
      release_date_precision: string;
      total_tracks: number;
      type: string;
      uri: string;
    }>;
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
  };
}

export interface IFeaturedPlaylists {
  message: string;
  playlists: {
    href: string;
    items: Array<{
      collaborative: boolean;
      description: string;
      external_urls: {
        spotify: string;
      };
      href: string;
      id: string;
      images: Array<IItemImages>;
      name: string;
      owner: {
        display_name: string;
        external_urls: {
          spotify: string;
        };
        href: string;
        id: string;
        type: string;
        uri: string;
      };
      primary_color: string | null;
      public: string | null;
      snapshot_id: string;
      tracks: {
        href: string;
        total: number;
      };
      type: string;
      uri: string;
    }>;
    limit: number;
    next: string | null;
    offset: number;
    previous: string | null;
    total: number;
  };
}

export interface ICategories {
  categories: {
    href: string;
    items: Array<{
      href: string;
      icons: Array<IItemImages>;
      id: string;
      name: string;
    }>;
    limit: number;
    next: string | null;
    offset: number;
    previous: string | null;
    total: number;
  };
}
