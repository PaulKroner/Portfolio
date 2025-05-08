import './App.css';
import { useEffect, useState } from "react";
import Cv from "./components/cv/cv";
import Projects from "./components/projects/projects";
import Skills from "./components/skills/skills";
import Welcome from './components/welcome/welcome';
import Questions from './components/questions/questions';
import Footer from './components/footer/footer';
import NavigationBar from "./components/navigationbar/navigationbar";

const App = () => {

  // Loader Animation
  document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
      document.querySelector(
        "body").style.visibility = "hidden";
      document.querySelector(
        "#page-loader").style.visibility = "visible";
    } else {
      document.querySelector(
        "#page-loader").style.display = "none";
      document.querySelector(
        "body").style.visibility = "visible";
      document.querySelector(
        "#page-loader-center").classList.remove("center");
    }
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleReadyStateChange = () => {
      if (document.readyState !== "complete") {
        const bodyElement = document.querySelector("body");
        const loaderElement = document.querySelector("#page-loader");
        if (bodyElement && loaderElement) {
          bodyElement.classList.add("hidden");
          loaderElement.classList.add("visible");
        }
      } else {
        const loaderElement = document.querySelector("#page-loader");
        const bodyElement = document.querySelector("body");
        const loaderCenterElement = document.querySelector("#page-loader-center");
        if (loaderElement && bodyElement && loaderCenterElement) {
          loaderElement.classList.remove("visible");
          bodyElement.classList.remove("hidden");
          loaderCenterElement.classList.remove("center");
          setLoading(false);
        }
      }
    };

    document.onreadystatechange = handleReadyStateChange;

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

export default App
