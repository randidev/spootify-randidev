import useToken from "@/hooks/spotify/useToken";
import Discover from "./Discover/components/Discover.page";

export default function Home() {
  useToken();

  return (
    <>
      <Discover />
    </>
  );
}
