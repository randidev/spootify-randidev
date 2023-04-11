import { NextPage } from "next";
import DiscoverBlock from "./DiscoverBlock/components/DiscoverBlock";
import useNewRelease from "@/hooks/spotify/useNewReleases";
import useFeaturedPlaylists from "@/hooks/spotify/useFeaturedPlaylists";
import useCategories from "@/hooks/spotify/useCategories";

const Discover: NextPage = () => {
  const { newReleases, loading: newRelaseLoading } = useNewRelease();
  const { featuredPlaylists, loading: featurePlaylistsLoading } =
    useFeaturedPlaylists();
  const { categories, loading: categoriesLoading } = useCategories();

  return (
    <div className="discover">
      <DiscoverBlock
        text="RELEASED THIS WEEK"
        id="released"
        loading={newRelaseLoading}
        data={
          newReleases && newReleases.albums
            ? newReleases.albums.items.map((r) => {
                return {
                  images: r.images,
                  name: r.name,
                };
              })
            : []
        }
      />
      <DiscoverBlock
        text="FEATURED PLAYLISTS"
        id="featured"
        loading={featurePlaylistsLoading}
        data={
          featuredPlaylists && featuredPlaylists.playlists
            ? featuredPlaylists.playlists.items.map((r) => {
                return {
                  images: r.images,
                  name: r.name,
                };
              })
            : []
        }
      />
      <DiscoverBlock
        text="BROWSE"
        id="browse"
        loading={categoriesLoading}
        data={
          categories && categories.categories
            ? categories.categories.items.map((r) => {
                return {
                  images: r.icons,
                  name: r.name,
                };
              })
            : []
        }
      />
    </div>
  );
};

export default Discover;
