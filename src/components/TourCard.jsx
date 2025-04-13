import React, { useState } from 'react';
import '../styles/styles.css';;

const TourCard = ({ id, name, info, price, image, onRemove }) => {

    const [readMore, setReadMore] = useState(false);

    const safeInfo = info || "No info available";

    return (
        <article className="tour-card">
            <div className='tour-card-content'>
            <h3 className='tour-card-title'>{name}</h3>
            <h5 className='tour-card-price'>{price}</h5>
            </div>
            <img src={image} alt={name} />
            <div className='tour-card-content'>
            <p className='tour-card-info'>
                {(readMore ? safeInfo : safeInfo.slice(0, 80)+ `...`)}
                <button className='read-toggle-btn' onClick={() => setReadMore(!readMore)}>
                    {readMore ? 'Show Less' : 'Read More'}
                </button>
            </p>
            <button className="btn-remove" onClick={() => {
                onRemove(id)
            }}>Not Interested</button>
            </div>
        </article>
    )
}

export default TourCard;