import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
} from "reactstrap";
import { HiOutlineChevronUp } from "react-icons/hi";
import { Slide } from "react-awesome-reveal";
import emailjs from "@emailjs/browser";

const kluc = process.env.REACT_APP_PUBLIC_KEY;

const MapaForm = () => {
  const [formular, setFormular] = useState({
    meno: "",
    telefon: "",
    email: "",
    sprava: "",
  });
  const [suhlas, setSuhlas] = useState(false);
  const [suhlasInfo, setSuhlasInfo] = useState(false);
  const [spravnyEmail, setSpravnyEmail] = useState(false);
  const [spravneMeno, setSpravneMeno] = useState(false);
  const [spravnaSprava, setSpravnaSprava] = useState(false);
  const [odoslane, setOdoslane] = useState({
    odoslanie: false,
    stav: "",
  });

  useEffect(() => {
    if (formular.email.length > 5) {
      if (!validateEmail(formular.email)) setSpravnyEmail(true);
      else setSpravnyEmail(false);
    }
    if (formular.meno.length >= 3) {
      if (formular.meno.length < 4) setSpravneMeno(true);
      else setSpravneMeno(false);
    }
    if (formular.sprava.length >= 5) {
      if (formular.sprava.length < 10) setSpravnaSprava(true);
      else setSpravnaSprava(false);
    }
  }, [formular.email, formular.meno, formular.sprava]);

  const odoslanieMailu = (e) => {
    e.preventDefault();
    console.log("Pokus o odoslanie");

    if (!suhlas) setSuhlasInfo(true);
    if (
      suhlas &&
      formular.meno.length > 4 &&
      formular.email.length > 5 &&
      formular.sprava.length >= 10
    ) {
      console.log("Email odoslaný!");
      setSuhlasInfo(false);

      emailjs
        .send(
          "service_iqkaylc",
          "basic-template",
          formular,
          "NIKfJmb5NyEbfecrn"
        )
        .then(
          (result) => {
            console.log(result.text);
            setOdoslane({
              odoslanie: true,
              stav: "success",
            });
          },
          (error) => {
            setOdoslane({
              odoslanie: true,
              stav: "danger",
            });
            console.log(error.text);
          }
        );
      e.target.reset();
    }
  };

  const suhlasOdoslanie = () => {
    setSuhlas(!suhlas);
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  return (
    <>
      <Slide triggerOnce={true}>
        <section className="mapa-form mt-5" id="kontakt">
          <Row md="2" sm="1" xs="1">
            <Col>
              <iframe
                title="Mapa Ubytovania"
                className="mt-3 mb-5"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2600.171527492621!2d19.537812215747056!3d49.32997127933646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4715b890a441462b%3A0xaa406e45934ac96b!2zSHLDrWJpa3kgMjI4LCAwMjcgNDQgVHZyZG_FocOtbg!5e0!3m2!1ssk!2ssk!4v1674768339007!5m2!1ssk!2ssk"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Col>
            <Col className="forma">
              {odoslane.odoslanie ? (
                <div
                  className={
                    odoslane.stav === "success"
                      ? `alert alert-success mt-5`
                      : `alert alert-danger mt-5`
                  }
                  role="alert"
                >
                  {odoslane.stav === "success" ? (
                    <span>
                      <strong>Ďakujeme!</strong> Vaša správa bola úspešne
                      odoslaná.
                    </span>
                  ) : (
                    <span>
                      <strong>Bohužiaľ!</strong> Vaša správa nebola odoslaná.
                      Kontaktujte nás prosím telefonicky.
                    </span>
                  )}
                </div>
              ) : (
                <Form onSubmit={odoslanieMailu} className="mt-5 text-center">
                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <Input
                          invalid={spravneMeno}
                          id="meno"
                          name="meno"
                          placeholder="Vaše Meno a Priezvisko"
                          onChange={(e) =>
                            setFormular({ ...formular, meno: e.target.value })
                          }
                        />
                        {spravneMeno < 4 && (
                          <FormFeedback> Meno nie je správne!</FormFeedback>
                        )}
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Input
                          invalid={spravnyEmail}
                          id="email"
                          name="email"
                          placeholder="váš@email"
                          type="email"
                          onChange={(e) =>
                            setFormular({ ...formular, email: e.target.value })
                          }
                        />
                        {spravnyEmail && (
                          <FormFeedback> E-mail nie je správny!</FormFeedback>
                        )}
                      </FormGroup>
                    </Col>
                  </Row>
                  <FormGroup>
                    <Input
                      id="telefon"
                      name="telefon"
                      type="number"
                      placeholder="Telefón"
                      onChange={(e) =>
                        setFormular({ ...formular, telefon: e.target.value })
                      }
                    />
                  </FormGroup>
                  <FormGroup className="text-start">
                    <Label for="sprava" className="pl-5">
                      Vaša správa:
                    </Label>
                    <Input
                      invalid={spravnaSprava}
                      id="sprava"
                      name="sprava"
                      type="textarea"
                      onChange={(e) =>
                        setFormular({ ...formular, sprava: e.target.value })
                      }
                    />
                    {spravnaSprava < 4 && (
                      <FormFeedback> Správa je moc krátka!</FormFeedback>
                    )}
                  </FormGroup>
                  <FormGroup className="text-start potvrdenie">
                    <Label check>Súhlasím so spracovaním osobných údajov</Label>
                    <Input
                      type="checkbox"
                      onChange={suhlasOdoslanie}
                      invalid={suhlasInfo}
                    />
                    {suhlasInfo && (
                      <FormFeedback className="text-center">
                        Potvrďte súhlas pre odoslanie!
                      </FormFeedback>
                    )}
                  </FormGroup>

                  <button
                    className="tlacitko form-tlacitko"
                    alt="Odoslať email ubytovaniu."
                  >
                    Odoslať e-mail
                  </button>
                </Form>
              )}
            </Col>
          </Row>
          <Slide direction="up">
            <p className="ikonka-hore">
              <a href="#vrch" alt="Odkaz na presmerovanie na vrchol stránky.">
                <HiOutlineChevronUp />
              </a>
            </p>
          </Slide>
        </section>
      </Slide>
    </>
  );
};

export default MapaForm;
