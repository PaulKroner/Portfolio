import './App.css';
import { useEffect, useState } from "react";
import Cv from "./components/cv/cv.tsx";
import Projects from "./components/projects/projects.tsx";
import Skills from "./components/skills/skills.tsx";
import Welcome from './components/welcome/welcome.tsx';
import Footer from './components/footer/footer.tsx';
import NavigationBar from "./components/navigationbar/navigationbar.tsx";

const App = () => {

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const handleReadyStateChange = () => {
      // Get elements and ensure they exist before manipulating
      const bodyElement = document.querySelector("body") as HTMLBodyElement | null;
      const pageLoaderElement = document.querySelector("#page-loader") as HTMLElement | null;
      const pageLoaderCenterElement = document.querySelector("#page-loader-center") as HTMLElement | null;

      if (document.readyState !== "complete") {
        if (bodyElement) {
          bodyElement.style.visibility = "hidden";
        }
        if (pageLoaderElement) {
          pageLoaderElement.style.visibility = "visible";
        }
      } else {
        if (pageLoaderElement) {
          pageLoaderElement.style.display = "none";
        }
        if (bodyElement) {
          bodyElement.style.visibility = "visible";
        }
        if (pageLoaderCenterElement) {
          pageLoaderCenterElement.classList.remove("center");
        }
        setLoading(false); // Set loading to false once the document is complete
      }
    };

    document.onreadystatechange = handleReadyStateChange;
    handleReadyStateChange();

    // Cleanup function to remove the event listener
    return () => {
      document.onreadystatechange = null;
    };
  }, []);

  return (
    <>
      {/* Loader */}
      <div id="page-loader" className={loading ? "visible" : "hidden"}>
        <div className="loader" id="page-loader"></div>
      </div>

      <div className="main-container" id="main-container">

        <div className="middle-container">

          <div className="left-container">
            <NavigationBar />
          </div>

          <div className="mid-container d-flex flex-column justify-content-center">

            <div className="welcome-box">
              <Welcome />
            </div>

            <div className="lower d-flex flex-column">
              <Cv />
              <Projects />
              <Skills />
              {/* <Questions /> */}
            </div>

            <Footer />
          </div>



        </div>

      </div>
    </>

  );
}

export default App;
