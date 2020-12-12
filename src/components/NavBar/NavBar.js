import React, { useState, useEffect } from "react";

import useIsSmallScreen from "../../hooks/useIsSmallScreen";

import logo from "../../assets/logos/vehiculum-logo.svg";
import mobileMenuIcon from "../../assets/icons/mobile-menu-icon.svg";

import "./NavBar.scss";

function NavBar() {
  // Initialize state
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const isSmallScreen = useIsSmallScreen();

  useEffect(() => {
    // Close submenu on small screens
    if (isSmallScreen) {
      setIsSubMenuOpen(false);
    }
  }, [isSmallScreen]);

  // Toggles the submenu's visibility
  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  // Returns the submenu
  const renderSubMenu = () => {
    return (
      <div className="NavBar__SubLinks">
        <a href="#" className="NavBar__SubLink">
          My published jokes
        </a>
        <a href="#" className="NavBar__SubLink">
          My saved jokes
        </a>
        <a href="#" className="NavBar__SubLink">
          Account Information
        </a>
        <a href="#" className="NavBar__SubLink">
          Publish new joke
        </a>
      </div>
    );
  };

  return (
    <div className="NavBar">
      <div className="NavBar__Inner">
        <img src={logo} alt="Vehiculum Logo" />
        {!isSmallScreen && (
          <nav className="NavBar__Nav">
            <div className="NavBar__NavItem">
              <a href="#" className="NavBar__Link">
                SO FUNKTIONIERT’S
              </a>
            </div>
            <div className="NavBar__NavItem">
              <a href="#" className="NavBar__Link">
                SONDERANGEBOTE
              </a>
            </div>
            <div className="NavBar__NavItem NavBar__NavItem--HasSubMenu">
              <a
                href="#"
                className="NavBar__Link NavBar__Link--with-icons"
                onClick={() => toggleSubMenu()}
              >
                MEIN BEREICH
              </a>
              {isSubMenuOpen && renderSubMenu()}
            </div>
          </nav>
        )}
        {isSmallScreen && (
          <img
            src={mobileMenuIcon}
            alt="Menu"
            className="NavBar__MobileMenuIcon"
          />
        )}
      </div>
    </div>
  );
}

export default NavBar;
