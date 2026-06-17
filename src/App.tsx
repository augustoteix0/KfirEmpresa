import { CallToActionSection } from "./page/CallToActionSection";
import { ClienteGrandeSection } from "./page/ClienteGrande";
import { CriteriosSections } from "./page/CriteriosSection";
import { FaqSection } from "./page/FaqSection";
import { HeaderSeaction } from "./page/HeaderSeaction";
import { HeroSection } from "./page/HeroSection";
import { PilaresSection } from "./page/PilaresSection";
import { ServicoSection } from "./page/ServicosSection";
import { TeseSection } from "./page/TeseSection";

export function App() {

  return (
    <div className="w-full overflow-hidden">
      <HeaderSeaction />
      <HeroSection/>
      <TeseSection />
      <PilaresSection />
      <ServicoSection />
      <ClienteGrandeSection />
      <CriteriosSections />
      <FaqSection/>
      <CallToActionSection />
    </div>
  )
}

