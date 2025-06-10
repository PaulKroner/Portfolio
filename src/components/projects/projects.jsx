import "./projects.css";
import ProjectsComponent from "./projects-component";

const Projects = () => {

  const projects = [
    {
      id: "ecsa-gpt",
      title: "ECSA-Gewaltpräventionstool Version 2",
      content: "Die Anwendung ermöglicht das Abrufen, Anlegen, Bearbeiten und Löschen von Mitarbeitern sowie deren Nachweisen (z. B. Polizeiliches Führungszeugnis). <br /> Sobald ein Nachweis abläuft oder nachgereicht werden muss, werden automatisch E-Mail-Benachrichtigungen an die betroffenen Mitarbeiter versendet. Zudem ist ein Authentifizierungssystem mit Rollenverwaltung für Administratoren und Mitarbeiter implementiert, das auf JWT basiert. <br /> Das Frontend wurde mit React.js entwickelt, während das Backend in PHP realisiert wurde. Die Anwendung nutzt eine MySQL-Datenbank.",
      usedTech: ["React", "TailwindCSS", "Shadcn UI", "PHP", "MySQL", "JWT"],
      moreToShow: false
    },
    {
      id: "ecsa-gpt",
      title: "ECSA-Gewaltpräventionstool Version 1",
      content: "Die Anwendung ermöglicht das Abrufen, Anlegen, Bearbeiten und Löschen von Mitarbeitern sowie deren Nachweisen (z. B. Polizeiliches Führungszeugnis). <br /> Sobald ein Nachweis abläuft oder nachgereicht werden muss, werden automatisch E-Mail-Benachrichtigungen an die betroffenen Mitarbeiter versendet. Zudem ist ein Authentifizierungssystem mit Rollenverwaltung für Administratoren und Mitarbeiter implementiert, das auf JWT basiert. <br /> Das Frontend wurde mit React.js entwickelt, während das Backend in PHP realisiert wurde. Die Anwendung nutzt eine MySQL-Datenbank. <br /><br /> Das Problem mit der ersten Version war, dass die Anwendung nicht mehr weiterentwickeln werden konnte, da lediglich ein Apache Webserver zur Verfügung stand. <br /> Daher habe ich die Anwendung neu entwickelt und dabei den Techstack gewechselt.",
      usedTech: ["Next.js", "TailwindCSS", "Shadcn UI", "Node.js", "Express.js", "MySQL", "Prisma",],
      moreToShow: false
    },
    {
      id: "long-SB",
      title: "SQL-Statementbuilder",
      content: "Der SQL-Statementbuilder ist ein einfacher Baukasten, mit dem User durch anklicken von Selectfeldern ein SQL-Statement erstellen können, ohne die Syntax zu kennen.",
      usedTech: ["HTML", "CSS", "JQuery", "PHP"],
      moreToShow: false
    },
    {
      id: "angularFrontend",
      title: "Angular Frontend",
      content: "Während meiner Werksstudententätigkeit habe ich den Entwicklern in der Frontend-Abteilung ausgeholfen. Das genutzte Framework war Angular.",
      usedTech: ["Angular", "Angular Material", "TypeScript"],
      moreToShow: false
    },
    {
      id: "live-voting-tool",
      title: "Live-Voting-Tool",
      content: `Im Rahmen des Mastermoduls "Software Engineering Project" 
            habe ich innerhalb einer Gruppenarbeit zusammen mit <a href="https://finatix.de/">Finatix</a> 
            ein Live-Voting-Tool erstellt. Ziel war es den Ablauf, Probleme und Lösungen eines Softwareprojekts 
            kennenzulernen. Der Techstack bestand aus React Typescript für das Frontend 
            und MariaDB, Node.js sowie OpenAPI fürs Backend.`,
      usedTech: ["React", "Bootstrap", "Typescript", "Node.js", "OpenAPI", "MariaDB", "Websockets"],
      moreToShow: false
    },
    {
      id: "little-Lemon",
      title: "Little Lemon Restaurant",
      content: `Im April 2024 habe ich das Meta Front-End Developer Zertifikat erhalten. 
            Aufgabe des Kurses war die Erstellung einer Restaurant Website, auf der man einen Blick auf die Speisekarte erhalten, 
            einen Tisch reservieren und Besucherbewertungen lesen kann.`,
      usedTech: ["React", "Figma"],
      moreToShow: false
    },
    {
      id: "poker",
      title: "Poker (WIP)",
      content: `Zusammen mit einem Freund baue ich ein Multiplayer Pokerspiel, 
                    welches zum Ausbau unserer Programmier-Fähigkeiten gedacht ist. 
                    Dabei bin ich für das Frontend zuständig.`,
      usedTech: ["React", "Bootstrap", "Node.js", "Socket.io"],
      moreToShow: false
    },
    {
      id: "ma-csharp",
      title: "RegioDataModule",
      content: `Im Rahmen meiner Masterarbeit habe ich ein Modul für das Projekt 
                <a href="https://www.digitalisierung-landwirtschaft.de/regionale-lebensmittel-fuer-leipzig-neue-plattform-lefoodie/">le’foodie</a> 
                entwickelt, dass mit der REGIOdata-API interagiert. Dabei sollen 
                Produkte aus der le’foodie Datenbank 
                abgerufen und danach sortiert werden, ob diese eine "RegioDataProductId" besitzen.
                Diese sollen zur globalen Speicherung auf der Plattform <a href="https://regiodata.org/">REGIOdata</a> gespeichert werden, 
                indem mit der API interagiert wird. Die Antwort enthält die "RegioDataProductId",
                welche dann für das jeweilige Produkte in der internen Datenbank abgespeichert wird.`,
      usedTech: ["C#", "ASP.NET Core", "Entity Framework"],
      moreToShow: false
    },
  ]
  return (
    <div>
      <div className="container-fluid projects-heading" id="projects">
        <div>
          <p>Projekte</p>
        </div>
      </div>

      <div className="projects d-flex flex-column justify-content-center align-items-center">

        {projects.map(project => (
          <div className="project-wrapper d-flex flex-row" key={project.id}>
            <ProjectsComponent id={project.id} title={project.title} content={project.content} usedTech={project.usedTech} moreToShow={project.moreToShow} />
          </div>

        ))}

      </div>
    </div>

  );
}

export default Projects;