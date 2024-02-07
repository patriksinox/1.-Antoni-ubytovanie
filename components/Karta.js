import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
import Image from "next/image";
const Karta = ({ img, meno, popis, kilometre, link }) => {
  const altLinku = `Prejsť na stránku ${meno}.`;
  return (
    <Card>
      <Image alt={meno} src={img.src} width={415} height={250} />
      <CardBody className="d-flex flex-column">
        <CardTitle tag="h5">{meno}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {kilometre ? `Vzdialenosť: ${kilometre} kilometrov` : ""}
        </CardSubtitle>
        <CardText>{popis}</CardText>

        <p className="text-center  mt-auto">
          <a
            href={link}
            target="_blank"
            className="mt-5 tlacitko"
            role="button"
            rel="noreferrer"
            alt={altLinku}
          >
            {" "}
            Viac informácií
          </a>
        </p>
      </CardBody>
    </Card>
  );
};

export default Karta;
