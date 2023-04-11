import { FC } from "react";
import SideBar from "../SideBar/SideBar";
import Header from "../Header/Header";
import Player from "../Player/Player";
import { TLayout } from "./type";
import Head from "next/head";
import classNames from "classnames";
import useLoading from "@/hooks/useLoading";

const Layout: FC<TLayout> = ({ children, history }) => {
  const { loading } = useLoading();

  return (
    <>
      <Head>
        <title>Spootify</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Head>

      <div className="main">
        <SideBar />
        <div className="main__content">
          <Header history={history} />
          <div className="main__content__child">{children}</div>
          <div
            className={classNames("main__loading", {
              "main__loading--show": loading.show,
            })}
          >
            <div className="main__loading__body">
              <div className="main__loading__body__backdrop"></div>
              <div className="main__loading__body__text">
                <p>Please wait</p>
              </div>
            </div>
          </div>
        </div>
        <Player />
      </div>
    </>
  );
};

export default Layout;
