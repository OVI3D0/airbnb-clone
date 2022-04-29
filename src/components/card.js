import '../styles/card.css'

const Card = (props) => {
    let badgeText, displayprop
    if(props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <>
            <div className="card mx-5">
                {badgeText && <button className="btn btn-light card-btn ms-2 mt-2">{badgeText}</button>}
                <img src={`/images/${props.img}`} alt="" className="rounded"/>
                <p className="pt-1"><i className="fa-solid fa-star"></i>({props.rating})<p className="review-grey d-inline ps-1">{props.reviewCount} - {props.location}</p></p>
                <p>{props.title}</p>
                <p className="fw-bold">From ${props.price} <p className="d-inline fw-normal">/ person</p></p>
                <p>Open spots: {props.openSpots}</p>
            </div>
        </>
    )
}

export default Card;