import LightGallery from "lightgallery/react";
import { obrazky } from "../components/data";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
//Pluginy
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { Zoom } from "react-awesome-reveal";
import Image from "next/image";

const Galeria = () => {
  return (
    <>
      <Zoom triggerOnce={true}>
        <div className="container" id="ubytovanie">
          <section className="text-center fotky-ubytovania">
            <h2>Fotky ubytovania</h2>
            <p>Pre viac fotiek rozkliknite</p>
            <LightGallery
              speed={500}
              plugins={[lgThumbnail, lgZoom]}
              className="mt-5"
            >
              {obrazky.map((obrazok, i) => {
                const { img } = obrazok;
                const popis = `Fotka ${i + 1} ubytovania Antoni v Tvrdošíne.`;

                return (
                  <a
                    title={popis}
                    href={img.src}
                    key={i}
                    className={i > 5 ? "obrazok hidden" : "obrazok"}
                  >
                    <Image alt={popis} src={img} className="img-fluid" />
                  </a>
                );
              })}
            </LightGallery>
          </section>
        </div>
      </Zoom>
    </>
  );
};

export default Galeria;
