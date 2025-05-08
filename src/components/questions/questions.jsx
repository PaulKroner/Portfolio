import "./questions.css";

const Questions = () => {

    const question = [
        {
            buttonLabel: "neue Erfahrungen sammeln",
            dropdownContent: "Ich bin stets offen, neue Software, Frameworks und Aufgaben kennenzulernen."
        },
        {
            buttonLabel: "wichtige Werte",
            dropdownContent: "Für mich ist ein respektvoller Umgang und Kommunikation auf Augenhöhe von herausragender Bedeutung. Die Einhaltung von Terminen und die pünktliche Anwesenheit bei der Arbeit sind für mich unerlässlich. Außerdem setze ich mich kontinuierlich dafür ein, meine Aufgaben zuverlässig und gewissenhaft zu erfüllen."
        },
        {
            buttonLabel: "wertvolles Teammitglied",
            dropdownContent: "Ich bin ein wertvolles Teammitglied, da ich mich gut in neue Gruppen integriere und schnell Anschluss finde. Genauso möchte ich die Stimmung im Team positiv beeinflussen und mich in Teamabenden oder Team-Spielen einbringen."
        },
        {
            buttonLabel: "großer Überblick",
            dropdownContent: "Durch mein Studium als Wirtschaftsinformatiker habe ich einen breiten Überblick über IT-Themen bekommen und kann mich so in verschiedene Aufgaben und Bereiche hineinversetzen. Sowohl durch die Zusammenarbeit mit Finatix als auch durch meine Arbeit bei GISA habe ich einen Einblick in die Arbeitswelt bekommen. Zusätzlich interessiere ich mich für das Programmieren und habe in meiner Freizeit sowie während meiner Studienzeit Erfahrungen sammeln können, die mir in der Arbeitswelt hilfreich sein werden."
        }
    ]

    return (
            <div>
                <div className="container-fluid d-flex flex-column">
                    <p className="question-heading">Warum sollten Sie mich in Betracht ziehen?</p>
                    <div className="question-list">
                        <ul className="dropdown-list">
                            {question.map((question, index) => (
                                <li key={index} className="dropend dp-desktop">
                                    <button className="btn dropdown-toggle dropdown-button" type="button" id={question.id}
                                        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        {question.buttonLabel}
                                    </button>
                                    <div className="dropdown-menu dropdown-text" aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item">
                                            {question.dropdownContent}
                                        </a>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
    );
}

export default Questions;