import React from "react";
import { Slide } from "react-awesome-reveal";

const Vybavenie = () => {
  return (
    <>
      <div className="bcg-biela">
        <Slide triggerOnce={true}>
          <section id="vybavenie" className="shadow-lg">
            <div className="popis vybavenie ">
              <h2 className="mt-5 text-center">Privát Antoni ponúka</h2>
              <p>
                Ubytovanie Privat Antoni sa nachádza v Tvrdošíne a ponúka
                sezónny vonkajší bazén, fitnescentrum, spoločenskú miestnosť a
                bezplatné Wi-Fi s úchvatným výhľadom na mesto. Hostia sa môžu
                tešiť na pohodlné ubytovanie s 2 spálňami, 1 kúpeľňou,
                jedálenským priestorom, plne vybavenou kuchyňou a terasou s
                nádherným výhľadom do záhrady. Ubytovanie poskytuje aj posteľnú
                bielizeň, uteráky a satelitnú TV s plochou obrazovkou. K
                dispozícii je bezplatné súkromné parkovisko a hostia si môžu
                objednať ďalšie uteráky a posteľnú bielizeň za príplatok.
                Ubytovanie Privat Antoni je ideálne pre pešiu turistiku,
                lyžovanie, stolný tenis a mnoho ďalších aktivít v okolí. Hostia
                si môžu vychutnať záhradu s grilom a v blízkosti sa môžu venovať
                windsurfingu a cyklistike. Ubytovanie sa nachádza v malebnom
                prostredí, ktoré ponúka dokonalú rovnováhu medzi oddychom a
                zábavou. Vychutnajte si príjemné ubytovanie v Ubytovaní Privat
                Antoni a urobte si nezabudnuteľnú dovolenku v Tvrdošíne.
              </p>
            </div>
          </section>
        </Slide>
      </div>
    </>
  );
};

export default Vybavenie;
