import Navigacia from "../components/Navigacia";
import Jumbo from "../components/Jumbo";
import Galeria from "../components/Galeria";
import Okolie from "../components/Okolie";
import Vybavenie from "../components/Vybavenie";
import MapaForm from "../components/MapaForm";
import Footer from "../components/Footer";

import { Mulish } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const mulish = Mulish({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className={mulish.className}>
        <Navigacia />
        <Jumbo />
        <Galeria />
        <Vybavenie />
        <div className="container">
          <Okolie />
          <MapaForm />
        </div>
        <Footer />
      </div>{" "}
    </>
  );
}
