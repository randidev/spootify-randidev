import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { THeader } from "./type";
import Image from "next/image";

const Header: FC<THeader> = ({ history }) => {
  return (
    <div className="header">
      <div className="header__logo__cover">
        <Image
          src={"/assets/images/hero.svg"}
          alt="header-logo"
          className="header__logo"
          fill
        />
      </div>
      <div>
        <h1>Your favourite tunes</h1>
        <h2>
          All <FontAwesomeIcon icon={faSun} /> and all{" "}
          <FontAwesomeIcon icon={faMoon} />
        </h2>
      </div>
    </div>
  );
};

export default Header;
