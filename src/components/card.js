import katie from "../images/zaferes.png";
import '../styles/card.css'

const Card = () => {
    return (
        <>
            <div className="card">
                <button className="btn btn-light card-btn ms-2 mt-2">SOLD OUT</button>
                <img src={katie} alt="" className="rounded"/>
                <p className="pt-1"><i class="fa-solid fa-star"></i>5.0<p className="review-grey d-inline ps-1">(6) - USA</p></p>
                <p>Life lessons with Katie Zaferes</p>
                <p className="fw-bold">From $136 <p className="d-inline fw-normal">/ person</p></p>
            </div>
        </>
    )
}

export default Card;