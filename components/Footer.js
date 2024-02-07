import React from "react";

const Footer = () => {
  return (
    <footer className="shadow">
      <p>Copyright © {new Date().getFullYear()}</p>
      <p>
        Vytvoril{" "}
        <a
          href="https://www.patriksubjak.sk"
          target="_blank"
          alt="Odkaz na tvorcu web stránky."
        >
          Patrik Šubjak
        </a>
      </p>
    </footer>
  );
};

export default Footer;
