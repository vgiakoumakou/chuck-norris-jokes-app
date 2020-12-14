import React, { useState, useEffect } from "react";

import useIsSmallScreen from "../../hooks/useIsSmallScreen";
import useComponentNotFocusedOut from "../../hooks/useComponentNotFocusedOut";

import logo from "../../assets/logos/vehiculum-logo.svg";
import mobileMenuIcon from "../../assets/icons/mobile-menu-icon.svg";

import "./NavBar.scss";

function NavBar() {
  // Initialize state
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const isSmallScreen = useIsSmallScreen();
  // Call the hook that detects clicks outside of an element
  const {
    ref,
    isComponentNotFocusedOut,
    setIsComponentNotFocusedOut,
  } = useComponentNotFocusedOut(true);

  useEffect(() => {
    // Close submenu on small screens
    if (isSmallScreen) {
      setIsSubMenuOpen(false);
    }
  }, [isSmallScreen]);

  useEffect(() => {
    if (!isComponentNotFocusedOut) {
      // Update state when submenu focus is lost
      setIsSubMenuOpen(false);
    }
  }, [isComponentNotFocusedOut]);

  // Toggles the submenu's visibility
  const toggleSubMenu = () => {
    const newIsMenuOpen = !isSubMenuOpen;
    setIsSubMenuOpen(newIsMenuOpen);
    if (newIsMenuOpen) {
      // When the submenu is set to open, reset focus to true
      setIsComponentNotFocusedOut(true);
    }
  };

  // Returns the submenu
  const renderSubMenu = () => {
    return (
      <div className="NavBar__SubLinks" ref={ref}>
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
            <div
              className="NavBar__NavItem NavBar__NavItem--HasSubMenu"
              onClick={(e) => {
                toggleSubMenu();
              }}
            >
              <a href="#" className="NavBar__Link NavBar__Link--with-icons">
                MEIN BEREICH
              </a>
              {isSubMenuOpen && isComponentNotFocusedOut && renderSubMenu()}
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
