import "./skills.css"

const Skills = () => {

    const skills = [
        {
            skill: "HTML",
            experience: "Fortgeschritten",
            width: "75%",
        },
        {
            skill: "CSS",
            experience: "Fortgeschritten",
            width: "75%",
        },
        {
            skill: "Bootstrap",
            experience: "Fortgeschritten",
            width: "75%",
        },
        {
            skill: "JavaScript",
            experience: "Fortgeschritten",
            width: "65%",
        },
        {
            skill: "React",
            experience: "Fortgeschritten",
            width: "65%",
        },
        {
            skill: "VBA",
            experience: "erhöhte Kenntnisse",
            width: "40%",
        },
        {
            skill: "Blue Prism",
            experience: "Grundlagen",
            width: "40%",
        },
        {
            skill: "SQL",
            experience: "Grundlagen",
            width: "25%",
        },
        {
            skill: "Angular",
            experience: "Grundlagen",
            width: "25%",
        },
        {
            skill: "PHP",
            experience: "Grundlagen",
            width: "20%",
        }
    ]

    return (
        <div>
            <div className="container-fluid projects-heading" id="skills">
                <div>
                    <p>Meine Fähigkeiten</p>
                </div>
            </div>

            <div className="container-fluid d-flex justify-content-center align-items-center p-5">

                <table className="table table-striped table-dark table-responsive skill-table align-middle">
                    <thead>
                        <tr>
                            <th scope="col" className="text-center">Skill</th>
                            <th scope="col" colspan="2" className="text-center">Erfahrung</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {skills.map((skill, index) => (
                            <tr key={index}>
                                <td className="text-center">{skill.skill}</td>
                                <td>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{ width: skill.width }}
                                            aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                    </div>
                                </td>
                                <td className="text-center">{skill.experience}</td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div >
        </div>
    );
}

export default Skills;