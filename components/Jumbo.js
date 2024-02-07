import React from "react";
import {
  AiTwotoneStar,
  AiFillLike,
  AiFillCar,
  AiTwotoneShop,
  AiFillPhone,
  AiFillMail,
} from "react-icons/ai";
import { IoLocation } from "react-icons/io5";
import Image from "next/image";

import fotka from "@/obrazky/obrazky-ubytovanie/1.webp";

const Jumbo = () => {
  return (
    <>
      <div className="jumbo-obal">
        <div>
          <section className="jumbo">
            <div className="jumbo-el jumbo-obsah">
              <span className="mini-nadpis">Apartmán Antoni</span>
              <h1>Ubytovanie v Tvrdošíne</h1>
              <p>
                Vitajte v našom útulnom ubytovaní na okraji Tvrdošína. Ponúkame
                Vám príjemný pobyt v modernom apartmáne s terasou, bezplatným
                Wi-Fi a výhľadom do záhrady. U nás sa môžete oddýchnuť po
                náročnom dni plnom aktivít a vychutnať si pokoj a pohodu. Naša
                lokalita je ideálna pre turistov, lyžiarov a cyklistov.
                Rezervujte si u nás svoj pobyt ešte dnes!
              </p>
              <ul className="jumbo-ikony">
                <li>
                  <AiFillCar /> <span>Parkovanie zdarma</span>
                </li>
                <li>
                  <AiTwotoneStar /> <span>Vynikajúce hodnotenia</span>
                </li>
                <li>
                  <AiFillLike /> <span>Veľké množstvo zážitkov v okolí</span>
                </li>

                <li>
                  {" "}
                  <AiTwotoneShop />{" "}
                  <span>Tesco, Kaufland a Lidl do 1 kilometra.</span>
                </li>
              </ul>
            </div>
            <div className="jumbo-el ">
              <div className="jumbo-img-wrap">
                <Image
                  src={fotka}
                  alt="Fotka ubytovania Antoni s výhľadom na Tvrdošín."
                  fill
                />
              </div>
            </div>
          </section>
          <div className="jumbo-box">
            <div className="box">
              {" "}
              <IoLocation /> <span>Tvrdošín, Orava</span>
            </div>
            <div className="box  box-link">
              {" "}
              <AiFillPhone />{" "}
              <a
                href="tel:+421911310033"
                role="button"
                alt="Zavolajte nám na číslo +421 911 310 033."
              >
                +421 911 310 033
              </a>
            </div>
            <div className="box box-link">
              {" "}
              <AiFillMail />
              <a href="#kontakt" role="button" alt="Kontaktujte nás emailom.">
                Pošlite e-mail
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Jumbo;
