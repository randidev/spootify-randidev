import React from "react";
import {
  faHeadphonesAlt,
  faHeart,
  faPlayCircle,
  faSearch,
  faStream,
} from "@fortawesome/free-solid-svg-icons";
import { renderSideBarOption } from "./helpers/renderSideBarOption";
import Image from "next/image";

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar__profile">
        <div className="sidebar__profile__avatar">
          <Image src="/assets/images/avatar.svg" alt="sidebar-avatar" fill />
        </div>
        <p>Bob Smith</p>
      </div>
      <div className="sidebar__options">
        {renderSideBarOption("/", faHeadphonesAlt, "Discover", {
          selected: true,
        })}
        {renderSideBarOption("/search", faSearch, "Search")}
        {renderSideBarOption("/favourites", faHeart, "Favourites")}
        {renderSideBarOption("/playlists", faPlayCircle, "Playlists")}
        {renderSideBarOption("/charts", faStream, "Charts")}
      </div>
    </div>
  );
}
