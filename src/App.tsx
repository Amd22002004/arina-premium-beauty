import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Price from "./pages/Price";
import BeforeAfter from "./pages/BeforeAfter";
import Reviews from "./pages/Reviews";
import FAQ from "./pages/FAQ";
import Contacts from "./pages/Contacts";
import Booking from "./pages/Booking";
import Privacy from "./pages/Privacy";
import Consent from "./pages/Consent";
import Memos from "./pages/Memos";
import MassazhLicaSpb from "./pages/MassazhLicaSpb";
import UhodZaLicomSpb from "./pages/UhodZaLicomSpb";
import PilingiSpb from "./pages/PilingiSpb";
import AparatnyeProtokolyLicaSpb from "./pages/AparatnyeProtokolyLicaSpb";
import FotoomolozhenieBblSpb from "./pages/FotoomolozhenieBblSpb";
import FrakcionnyyLazerCo2Spb from "./pages/FrakcionnyyLazerCo2Spb";
import ApparatnyeProtokolyTelaSpb from "./pages/ApparatnyeProtokolyTelaSpb";
import KorrekciyaFigurySpb from "./pages/KorrekciyaFigurySpb";
import MassazhTelaSpb from "./pages/MassazhTelaSpb";
import VosstanovitelnyeMassazhiSpb from "./pages/VosstanovitelnyeMassazhiSpb";
import SpaIVosstanovlenieSpb from "./pages/SpaIVosstanovlenieSpb";
import DopolnitelnyeUslugiSpb from "./pages/DopolnitelnyeUslugiSpb";
import OzdorovitelnyeProcedury from "./pages/OzdorovitelnyeProcedury";
import ArtProtocolIntro from "./pages/ArtProtocolIntro";
import CoursesAndPackages from "./pages/CoursesAndPackages";
import UdarnoVolnovayaTerapiyaSpb from "./pages/UdarnoVolnovayaTerapiyaSpb";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/price" element={<Price />} />
          <Route path="/before-after" element={<BeforeAfter />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/consent" element={<Consent />} />
          <Route path="/memos" element={<Memos />} />
          <Route path="/massazh-lica-spb" element={<MassazhLicaSpb />} />
          <Route path="/uhod-za-licom-spb" element={<UhodZaLicomSpb />} />
          <Route path="/pilingi-spb" element={<PilingiSpb />} />
          <Route path="/aparatnye-protokoly-lica-spb" element={<AparatnyeProtokolyLicaSpb />} />
          <Route path="/fotoomolozhenie-bbl-spb" element={<FotoomolozhenieBblSpb />} />
          <Route path="/frakcionnyy-lazer-co2-spb" element={<FrakcionnyyLazerCo2Spb />} />
          <Route path="/apparatnye-protokoly-tela-spb" element={<ApparatnyeProtokolyTelaSpb />} />
          <Route path="/korrekciya-figury-spb" element={<KorrekciyaFigurySpb />} />
          <Route path="/massazh-tela-spb" element={<MassazhTelaSpb />} />
          <Route path="/vosstanovitelnye-massazhi-spb" element={<VosstanovitelnyeMassazhiSpb />} />
          <Route path="/spa-i-vosstanovlenie-spb" element={<SpaIVosstanovlenieSpb />} />
          <Route path="/dopolnitelnye-uslugi-spb" element={<DopolnitelnyeUslugiSpb />} />
          <Route path="/ozdorovitelnye-procedury-spb" element={<OzdorovitelnyeProcedury />} />
          <Route path="/art-protokol-znakomstvo" element={<ArtProtocolIntro />} />
          <Route path="/kursy-i-kompleksy" element={<CoursesAndPackages />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </HelmetProvider>
);

export default App;
