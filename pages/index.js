import Navigacia from "../components/Navigacia";
import Jumbo from "../components/Jumbo";
import Galeria from "../components/Galeria";
import Okolie from "../components/Okolie";
import Vybavenie from "../components/Vybavenie";
import MapaForm from "../components/MapaForm";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navigacia />
      <Jumbo />
      <Galeria />
      <Vybavenie />
      <div className="container">
        <Okolie />
        <MapaForm />
      </div>
      <Footer />
    </>
  );
}
