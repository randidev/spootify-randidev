import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cx from "classnames";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export const renderSideBarOption = (
  link: string,
  icon: IconProp,
  text: string,
  state: { selected: boolean } = { selected: false }
) => {
  return (
    <div
      className={cx("sidebar__option", {
        "sidebar__option--selected": state.selected,
      })}
    >
      <FontAwesomeIcon icon={icon} />
      <p>{text}</p>
    </div>
  );
};
