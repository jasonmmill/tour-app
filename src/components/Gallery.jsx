import React, { useState, useEffect } from 'react';
import TourCard from './TourCard';

const Gallery = ({cards, setCards, onRemove}) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const fetchCards = async () => {
        try {
            const res = await fetch("https://api.allorigins.win/raw?url=https://course-api.com/react-tours-project");
            const data = await res.json();
            const trimmed = data.map((card) => ({
                id: card.id,
                name: card.name,
                info: card.info,
                price: `Price: $${card.price}`,
                image: card.image
            }));
            setCards(trimmed);
            setLoading(false);
        } catch (error) {
            setError(true);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchCards();
    }, []);

    if (loading) {
        return <h2>Loading...</h2>;
    };

    if (error) {
        return <h2>Something went wrong...</h2>;
    };

    if (cards.length === 0) {
        return (
        <>
            <h2>No Tours Left</h2>
            <button onClick={fetchCards}>Refresh</button>
        </>
        )
    }
        
    return (
        <section className='gallery'>
            {cards.map((card) => {
                return (
                    <TourCard
                        key={card.id}
                        {...card}
                        onRemove={onRemove}
                    />
                )
            })}
        </section>
    )
}

export default Gallery;
