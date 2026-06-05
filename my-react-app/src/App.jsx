import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import InfoSection from "./components/InfoSection/InfoSection";
import PlanetCardSection from "./components/PlanetCardSection/PlanetCardSection";
import TableSection from "./components/TableSection/TableSection";
import FormSection from "./components/FormSection/FormSection";
import FooterSection from "./components/FooterSection/FooterSection";

function App() {

  return (
    <>
      <Navbar />
      <HeroSection />
      <InfoSection />
      <PlanetCardSection />
      <TableSection />
      <FormSection />
      <FooterSection />
    </>
  );
}

export default App;