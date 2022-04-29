import '../styles/hero.css';
import '../styles/styles.css';

const Hero = () => {
    return (
        <>
            <div>
                <div className="row d-flex justify-content-around herow py-5 mt-5 mx-auto">
                    <div className="col-2 px-1 mx-1 d-flex flex-column">
                        <img src={"/images/col1.png"} className="rounded-3 my-1" alt="hero img" />
                    </div>
                    <div className="col-2 px-1 mx-1 d-flex flex-column align-self-start">
                        <img src={"/images/col2-1.png"} className="rounded-3 my-1" alt="hero img" />
                        <img src={"/images/col2-2.png"} alt="hero img" />
                    </div>
                    <div className="col-2 px-1 mx-1 d-flex flex-column">
                        <img src={"/images/col3-1.png"} className="rounded-3 my-1" alt="hero img" />
                        <img src={"/images/col3-2.png"} className="rounded-3 my-1" alt="hero img" />
                    </div>
                    <div className="col-2 px-1 mx-1 d-flex flex-column align-self-start">
                        <img src={"/images/col4-1.png"} className="rounded-3 my-1" alt="hero img" />
                        <img src={"/images/col4-2.png"} className="rounded-3 my-1" alt="hero img" />
                    </div>
                    <div className="col-2 px-1 mx-1 d-flex flex-column">
                        <img src={"/images/col5-1.png"} className="rounded-3 my-1" alt="hero img" />
                        <img src={"/images/col5-2.png"} className="rounded-3 my-1" alt="hero img" />
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