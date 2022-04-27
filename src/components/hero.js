import col1 from "../images/col1.png";
import col21 from "../images/col2-1.png";
import col22 from "../images/col2-2.png";
import col31 from "../images/col3-1.png";
import col32 from "../images/col3-2.png";
import col41 from "../images/col4-1.png";
import col42 from "../images/col4-2.png";
import col51 from "../images/col5-1.png";
import col52 from "../images/col5-2.png";
import '../styles/hero.css';

const Hero = () => {
    return (
        <>
            <div>
                <div className="row d-flex justify-content-around herow py-5 mt-5 mx-auto">
                    <div className="col-2 px-1 mx-1 d-flex flex-column">
                        <img src={col1} className="rounded-3 my-1" alt="hero img" />
                    </div>
                    <div className="col-2 px-1 mx-1 d-flex flex-column align-self-start">
                        <img src={col21} className="rounded-3 my-1" alt="hero img" />
                        <img src={col22} alt="hero img" />
                    </div>
                    <div className="col-2 px-1 mx-1 d-flex flex-column">
                        <img src={col31} className="rounded-3 my-1" alt="hero img" />
                        <img src={col32} className="rounded-3 my-1" alt="hero img" />
                    </div>
                    <div className="col-2 px-1 mx-1 d-flex flex-column align-self-start">
                        <img src={col41} className="rounded-3 my-1" alt="hero img" />
                        <img src={col42} className="rounded-3 my-1" alt="hero img" />
                    </div>
                    <div className="col-2 px-1 mx-1 d-flex flex-column">
                        <img src={col51} className="rounded-3 my-1" alt="hero img" />
                        <img src={col52} className="rounded-3 my-1" alt="hero img" />
                    </div>
                </div>
                <div className="row ps-5 herotitle">
                    <h1>Online Experiences</h1>
                    <p>
                        Join unique interactive activities led by one-of-a-kind hosts-all
                        without leaving home.
                    </p>
                </div>
            </div>

        </>
    )
}

export default Hero;