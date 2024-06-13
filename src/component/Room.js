import React from "react";
import { Link } from "react-router-dom";
import defaultimag from "../images/room-1.jpeg"

function Room({ room }) {

    const { name, slug, images, price } = room;

    return (
        // <div>Hello from the room</div>
        <article className="room">
            <div className="img-container">
                <img src={images[0] || defaultimag} alt="single-room" />
                <div className="price-top">
                    <h6>${price}</h6>
                    <p>per night</p>
                </div>
                <Link to={`/rooms/${slug}`} className="btn-primary room-link">
                    Features
                </Link>
            </div>
        </article>
    )
}
export default Room;