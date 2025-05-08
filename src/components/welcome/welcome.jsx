import "./welcome.css";
import profil_picture from "../../assets/profil_picture.jpg";

const Welcome = () => {
    return (
        <div className="d-flex flex-row welcome">
            <div className="top d-flex flex-row flex-wrap justify-content-center">
                <div className="text-field">
                    <span className="large-heading">Hi, ich bin Paul!</span>

                    <div className="spinner-wrapper">
                        <section className="animation">
                            <div className="first"><span className="small-heading">Winfo Student</span></div>
                            <div className="second"><span className="small-heading">Webdeveloper</span></div>
                            <div className="third"><span className="small-heading">Technik-Enthusiast</span></div>
                        </section>
                    </div>

                </div>

                <div className="picture-field d-flex justify-content-center align-items-center">
                    <img className="rounded img-fluid picture-mobile" src={profil_picture} alt="profilpicture" />
                </div>
            </div>
        </div>
    );
};

export default Welcome;