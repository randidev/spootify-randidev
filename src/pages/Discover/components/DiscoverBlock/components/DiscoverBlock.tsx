import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import DiscoverItem from "./DiscoverItem";
import { TDiscoverBlockProps } from "./type";
import { scrollContainer } from "./helper";

const DiscoverBlock: FC<TDiscoverBlockProps> = ({
  text,
  id,
  data,
  loading,
}) => {
  return (
    <div className="discover-block">
      <div className="discover-block__header">
        <h2>{text}</h2>
        <span />
        {data.length ? (
          <div className="animate__animated animate__fadeIn">
            <FontAwesomeIcon
              icon={faChevronLeft}
              onClick={scrollContainer(id, { isNegative: true })}
            />
            <FontAwesomeIcon
              icon={faChevronRight}
              onClick={scrollContainer(id)}
            />
          </div>
        ) : null}
      </div>
      <div className="discover-block__row" id={id}>
        {loading ? (
          <div className="discover-block__row-loading">
            <span>Fetching Data</span>
          </div>
        ) : (
          <>
            {data.map((r) => (
              <DiscoverItem key={r.name} images={r.images} name={r.name} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default DiscoverBlock;
