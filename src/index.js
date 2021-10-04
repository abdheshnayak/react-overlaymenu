import React, { useEffect } from "react";
import PropTypes from "prop-types";

const OverlayMenu = ({ visible, setVisible, container_ref, children }) => {
  const handleClickOutside = (event) => {
    if (
      container_ref.current &&
      !container_ref.current.contains(event.target)
    ) {
      setVisible(false);
    }
  };
  const handleEscapePress = (e) => {
    if (e.code == "Escape") {
      setVisible(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapePress);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapePress);
    };
  }, []);
  return (
    <React.Fragment>
      {visible && <React.Fragment>{children}</React.Fragment>}
    </React.Fragment>
  );
};

if (process.env.NODE_ENV !== "production") {
  OverlayMenu.propTypes = {
    visible: PropTypes.bool,
    setVisible: PropTypes.func,
    container_ref: PropTypes.object,
    children: PropTypes.node.isRequired,
  };
}

OverlayMenu.defaultProps = {
  visible: true,
  setVisible: () => {},
};

export default OverlayMenu;
