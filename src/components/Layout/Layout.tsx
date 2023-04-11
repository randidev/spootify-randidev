import { FC } from "react";
import SideBar from "../SideBar/SideBar";
import Header from "../Header/Header";
import Player from "../Player/Player";
import { TLayout } from "./type";

const Layout: FC<TLayout> = ({ children, history }) => {
  return (
    <div className="main">
      <SideBar />
      <div className="main__content">
        <Header history={history} />
        <div className="main__content__child">{children}</div>
      </div>
      <Player />
    </div>
  );
};

export default Layout;
