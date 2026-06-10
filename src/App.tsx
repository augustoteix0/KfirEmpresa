import { ClienteGrandeSection } from "./page/ClienteGrande";
import { CriteriosSections } from "./page/CriteriosSection";
import { HeaderSeaction } from "./page/HeaderSeaction";
import { HeroSection } from "./page/HeroSection";
import { PilaresSection } from "./page/PilaresSection";
import { ServicoSection } from "./page/ServicosSection";
import { TeseSection } from "./page/TeseSection";

export function App() {

  return (
    <div className="MainContainer ">
      <HeaderSeaction />
      <HeroSection/>
      <TeseSection />
      <PilaresSection />
      <ServicoSection />
      <ClienteGrandeSection />
      <CriteriosSections />
    </div>
  )
}

