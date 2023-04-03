import { Fragment, useEffect } from "react";
import { useState } from "react";

import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home";
import Benefits from "./scenes/benefits";
import OurClasses from "./scenes/ourClasses";
import ContactUS from "./scenes/contactUs";
import Footer from "./scenes/footer";

enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUS = "contactus",
}

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );

  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      //checks if we are at the top of the page and the sets "setIsTopOfPage" to true.
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Fragment>
      <div className="bg-gray-20">
        <Navbar
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          isTopOfPage={isTopOfPage}
        />

        <Home setSelectedPage={setSelectedPage} />

        <Benefits setSelectedPage={setSelectedPage} />

        <OurClasses setSelectedPage={setSelectedPage} />

        <ContactUS setSelectedPage={setSelectedPage} />

        <Footer />
      </div>
    </Fragment>
  );
}

export default App;
