import React from "react";

import PropTypes from "prop-types";

const Header = ({ headerText }) => (

  <div className="container">
    <header className="topbar">
      <div className="">{headerText}</div>
    </header>
  </div>
  
)

Header.propTypes = {
  headerText: PropTypes.string
}

export default Header;