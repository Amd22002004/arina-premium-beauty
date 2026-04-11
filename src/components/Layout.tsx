import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import FloatingContactWidget from "./FloatingContactWidget";
import BackgroundButterflies from "./BackgroundButterflies";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="flex flex-col min-h-screen relative">
    <BackgroundButterflies />
    <Header />
    <main className="flex-1 pt-16 md:pt-20 relative z-[1]">{children}</main>
    <Footer />
    <FloatingContactWidget />
  </div>
);

export default Layout;
