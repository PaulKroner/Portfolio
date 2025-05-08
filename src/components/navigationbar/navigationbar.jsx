import "./navigationbar.css";
import { useState } from "react";

const NavigationBar = () => {

    const [isChange, setIsChange] = useState(false);
    const [isSidebarClosed, setIsSidebarClosed] = useState(false);

    const burgerChange = () => {
        setIsChange(!isChange);
    };

    const handleToggleSidebar = () => {
        setIsSidebarClosed(!isSidebarClosed);
    };

    return (
        <div className={`sidebar ${isChange ? "" : "close"}`}>
            <div className="sidebar-top">

                <div className="mobile-burger-bar">
                    <div className={`burger ${isChange ? "change" : ""}`} onClick={burgerChange}>
                        <div className="barbox">
                            <div className="bar1"></div>
                            <div className="bar2"></div>
                            <div className="bar3"></div>
                        </div>
                    </div>
                </div>

                <div className="hreflinks-top">
                    <div className="hreflinks-top-box">
                        <li className="hrefsymbols">
                            <a href="#">
                                <i className='bx bx-home-alt icon'></i>
                                <div className="text">Home</div>
                            </a>
                        </li>

                        <li className="hrefsymbols">
                            <a href="#cv">
                                <i className='bx bx-user icon'></i>
                                <div className="text">Lebenslauf</div>
                            </a>
                        </li>

                        <li className="hrefsymbols">
                            <a href="#projects">
                                <i className='bx bx-code icon'></i>
                                <div className="text">Projekte</div>
                            </a>
                        </li>

                        <li className="hrefsymbols">
                            <a href="#skills">
                                <i className='bx bx-bar-chart-alt-2 icon'></i>
                                <div className="text">Skills</div>
                            </a>
                        </li>
                    </div>
                </div>
            </div>
            <div className="sidebar-bottom">

                <div className="hreflinks-bottom ">
                    <div className="hreflinks-top-box">
                        <li className="hrefsymbols">
                            <a href="https://github.com/PaulKroner">
                                <i className='bx bxl-github icon'></i>
                                <div className="text">GitHub</div>
                            </a>
                        </li>

                        <li className="hrefsymbols">
                            <a href="https://www.linkedin.com/in/paul-kr%C3%B6ner/">
                                <i className='bx bxl-linkedin-square icon'></i>
                                <div className="text">LinkedIn</div>
                            </a>
                        </li>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default NavigationBar;