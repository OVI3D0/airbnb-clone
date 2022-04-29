import '../styles/card.css'

const Card = (props) => {
    let badgeText
    if(props.card.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.card.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <>
            <div className="card mx-5">
                {badgeText && <button className="btn btn-light card-btn ms-2 mt-2">{badgeText}</button>}
                <img src={`/images/${props.card.coverImg}`} alt="" className="rounded"/>
                <p className="pt-1"><i className="fa-solid fa-star"></i>({props.card.rating})<p className="review-grey d-inline ps-1">{props.card.reviewCount} - {props.card.location}</p></p>
                <p>{props.card.title}</p>
                <p className="fw-bold">From ${props.card.price} <p className="d-inline fw-normal">/ person</p></p>
                <p>Open spots: {props.card.openSpots}</p>
            </div>
        </>
    )
}

export default Card;