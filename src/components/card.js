import '../styles/card.css'

const Card = (props) => {
    return (
        <>
            <div className="card">
                <button className="btn btn-light card-btn ms-2 mt-2">SOLD OUT</button>
                <img src={`/images/${props.img}`} alt="" className="rounded"/>
                <p className="pt-1"><i className="fa-solid fa-star"></i>({props.rating})<p className="review-grey d-inline ps-1">{props.reviewCount} - {props.country}</p></p>
                <p>{props.title}</p>
                <p className="fw-bold">From ${props.price} <p className="d-inline fw-normal">/ person</p></p>
            </div>
        </>
    )
}

export default Card;