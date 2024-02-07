import React from "react";
import { Row, Col } from "reactstrap";
import { atrakcie } from "../components/data";

import Karta from "./Karta";
import { Zoom } from "react-awesome-reveal";
const Okolie = () => {
  return (
    <>
      <Zoom triggerOnce={true}>
        <section id="okolie" className="mt-5">
          <h2 className="mt-5 mb-3">V blízkom okolí sa nachádza</h2>
          <Row md="3" sm="2" xs="1">
            {atrakcie.map((atrakcia, i) => {
              return (
                <Col key={i} className="mt-3 d-flex align-items-stretch">
                  <Karta {...atrakcia} />
                </Col>
              );
            })}
          </Row>
          <p className="dalsie-btn">
            <a
              target="_blank"
              href="https://www.kamnavylet.sk/sk/atrakcie/tvrdosin"
              className="tlacitko"
              alt="Prejsť na stránku dalších atrakcií v okolí."
            >
              Dalšie atrakcie v okolí
            </a>
          </p>
        </section>
      </Zoom>
    </>
  );
};

export default Okolie;
