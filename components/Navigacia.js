import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import Image from "next/image";

import icon from "public/favicon-32x32.png";

function Navigacia(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <header className="obal-nav" id="vrch">
      <Navbar {...args} className="navbar-expand-md container">
        <NavbarBrand href="/" alt="Prejsť na hlavnú stránku.">
          <Image src={icon} />
          Ubytovanie Antoni
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="#ubytovanie" alt="Prejsť na fotky ubytovania.">
                Ubytovanie
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#vybavenie" alt="Prejsť na vybavenie ubytovania.">
                Vybavenie
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#okolie" alt="Prejsť na okolie ubytovania.">
                Okolie
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#kontakt" alt="Prejsť na kontakt ubytovania.">
                Kontakt
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </header>
  );
}

export default Navigacia;
