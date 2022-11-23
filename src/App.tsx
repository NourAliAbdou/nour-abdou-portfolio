import React from "react";
import { useMediaQuery } from "react-responsive";
import {
  Blog,
  Header,
  Main,
  About,
  Experience,
  SpecKnowledge,
  Hire,
  Contact,
  Footer,
} from "./components";

function App() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  // const isDesktopOrLaptop = useMediaQuery({
  //   query: "(min-width: 1224px)",
  // });
  // const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  // const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  // const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });
  const renderBar = () => (
    <div className="">
      <i>__</i>
      <i className="uil uil-star text-xs"></i>
      <i className="uil uil-star"></i>
      <i className="uil uil-star text-xs"></i>
      <i>__</i>
    </div>
  );
  return (
    <div
    // className={isTabletOrMobile ? "p-4" : "px-32 py-10 "}
    >
      <Header />
      <Main />
      {/* {renderBar()} */}
      <About />
      {/* {renderBar()} */}
      <Experience />
      {/* {renderBar()} */}
      <SpecKnowledge />
      <Blog />
      {/* {renderBar()} */}
      <Hire />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
