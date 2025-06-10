import "./cv.css";

const Cv = () => {

  // fade in Animation
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        // reveals[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", reveal);
  return (
    <>
      <div className="container-fluid d-flex flex-column cv" id="cv">

        <div className="d-flex justify-content-center">
          <div className="cv-card reveal fade-left">
            <div className="cv-headline fs-1">
              <p>Bildung</p>
            </div>

            <ol className="fs-4">
              <div>
                <li className="cvList">
                  2011 - 2019
                </li>
                <div className="">
                  Abitur - Staatliches Gymnasium Wilhelm von Humboldt
                </div>
              </div>

              <div>
                <li className="cvList">
                  2019 - 2023
                </li>
                <div className="">
                  Bachelor Wirtschaftsinformatik - Universität Leipzig
                </div>

                <li className="cvList">
                  2023 - 2025
                </li>
                <div className="">
                  Master Wirtschaftsinformatik - Universität Leipzig
                </div>
              </div>
            </ol>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <div className="cv-card reveal fade-right">
            <div className="container-fluid fs-1 cv-headline">
              <p>Praktika und Werk<wbr />studenten<wbr />arbeit</p>
            </div>

            <ol className="cv-text fs-4">
              <div>
                <li className="cvList">
                  11.2021 - 04.2022
                </li>
                <div className="">
                  Praktikum - <a href="https://www.gisa.de/">GISA GmbH</a>
                  <ul className="mt-2">
                    <li className="cv-list-lower">
                      Einarbeitung Frontend powercloud
                    </li>
                    <li className="cv-list-lower">
                      Datenmigration für Energieversorger in Kooperation mit <a href="https://www.natuvion.com/de/">Natuvion GmbH</a>
                    </li>
                    <li className="cv-list-lower">
                      Mitarbeit als Entwickler in einem Scrum Team,
                      Erstellung eines powercloud-Addons in Angular
                    </li>
                    <li className="cv-list-lower">
                      PHP - Erstellung eines SQL-Statementbaukastens mithilfe von PHP und einer MySQL Datenbank
                    </li>
                    <li className="cv-list-lower">
                      VBA - Verarbeitung und Überprüfung von CSV-Dateien
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <li className="cvList">
                  05.2022 - 04.2023
                </li>
                <div className="">
                  Werkstudent - <a href="https://www.gisa.de/">GISA GmbH</a> <br />
                  <ul className="mt-2">
                    <li className="cv-list-lower">
                      Einarbeitung Frontend powercloud
                    </li>
                    <li className="cv-list-lower">
                      Datenmigration für Energieversorger in Kooperation mit <a href="https://www.natuvion.com/de/">Natuvion GmbH</a>
                    </li>
                    <li className="cv-list-lower">
                      Mitarbeit als Entwickler in einem Scrum Team,
                      Erstellung eines powercloud-Addons in Angular
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <li className="cvList">
                  08.2024 - 03.2025
                </li>
                <div className="">
                  Minijob - <a href="https://ecsa.de/">EC Sachsen-Anhalt</a> <br />
                  <ul className="mt-2">
                    <li className="cv-list-lower">
                      Full Stack: React, PHP, MySQL (Version 2)
                    </li>
                    <li className="cv-list-lower">
                      Full Stack: React, Node.js, Express.js, MySQL, Prisma, Postgres (Version 1)
                    </li>
                    <li className="cv-list-lower">
                      Entwicklung REST-API
                    </li>
                    <li className="cv-list-lower">
                      Registrierung, Authentifizierung, Token-Handling mit JWT
                    </li>
                    <li className="cv-list-lower">
                      Deployment auf einem Apache Webserver
                    </li>
                  </ul>
                </div>
              </div>
            </ol>
          </div>
        </div>

      </div>
    </>
  );
}

export default Cv;