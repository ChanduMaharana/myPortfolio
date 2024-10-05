import React from "react";
import '../styles/home.css'
import mineImage from '../assets/mine.png';


const Home = () => {
    return (
        <div>
            {/* Home Section */}
            <section className="home">
                <div className="home-content container">
                    <h3 className="slideIn">Hi</h3>
                    <h1 className="slideIn">
                        I'm <span>Chandu</span> <br /> a FullStack Developer
                    </h1>
                </div>
                <div className="img-box slideDown">
                <img src={mineImage} id="img" alt="me" />
                </div>
            </section>

            {/* About Section */}
            <section className="about slideUp">
                <div className="about-img">
                <img src={mineImage} id="img" alt="me" />
                </div>
                <div className="about-content" col="6" lg="6" >
                    <h2 className="heading">
                        About <span>Me</span>
                    </h2>
                    <h3>
                        Frontend <span>Developer</span>
                    </h3>
                    <p>
                        Hello! I'm Chandu, a web developer with a passion for creating beautiful and functional websites...
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Home;
