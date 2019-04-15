import React from "react";
import { Dropdown, Image, Menu } from "semantic-ui-react";

import logo from "./images/elinoi-logo-white.svg";

import "./Header.scss";

const Header = ({ currentUser }) => (
  <Menu borderless className="appHeader">
    <Menu.Item >
      <img src={logo} alt="logo" />
    </Menu.Item>
    <Menu.Item>
      Candidatures
        </Menu.Item>
    <Menu.Item>
      Talents
        </Menu.Item>
    <Menu.Item>
      Offres
        </Menu.Item>
    <Menu.Item>
      Startups
        </Menu.Item>
    <Menu.Menu position={"right"}>
      <Dropdown
        item={true}
        trigger={
          <span>
            Bonjour {currentUser.firstname}
            <Image avatar src={currentUser.image} />
          </span>
        }
      >
        <Dropdown.Menu >
          <Dropdown.Item>
            Utilisateurs
              </Dropdown.Item>
          <Dropdown.Item>
            Se déconnecter
              </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Menu>
  </Menu>
);

export default Header;
