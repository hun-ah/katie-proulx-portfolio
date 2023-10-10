import "./styles/globals.css";
import "./styles/reset.css";
import { Public_Sans } from "next/font/google";
import { MenuProvider } from "./components/contexts/MenuContext";
import { ModalProvider } from "./components/contexts/ModalContext";
import { ProjectDetailsProvider } from "./components/contexts/ProjectDetailsContext";
import Navbar from "./components/nav/navbar/Navbar";
import Footer from "./components/footer/Footer";
import MobileMenu from "./components/nav/mobile-menu/MobileMenu";
import ContactModal from "./components/home/intro/contact-modal/ContactModal";

const publicSans = Public_Sans(
  { subsets: ["latin"] },
  { weights: ["400", "700", "900"] }
);

export const metadata = {
  title: "Katie Proulx | Product Designer",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={publicSans.className}>
        <ModalProvider>
          <MenuProvider>
            <Navbar />
            <MobileMenu />
            <ContactModal />
            <ProjectDetailsProvider>{children}</ProjectDetailsProvider>
            <Footer />
          </MenuProvider>
        </ModalProvider>
      </body>
    </html>
  );
}
