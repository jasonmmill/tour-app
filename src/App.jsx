import React, {useState} from 'react'
import Gallery from './components/Gallery'

function App() { // main app component
  const [cards, setCards] = useState([]); // state to hold the card data

  const removeCard = (id) => { // function to remove a card by id
    setCards((prevCards) => prevCards.filter((card) => card.id !== id));
  }

  return ( // rendering the main app 
    <main>
      <h1 className='web-head'> Explore our Tours!</h1>
      <Gallery cards={cards} setCards={setCards} onRemove={removeCard} />
    </main>
  )
}

export default App

const jason = "jason"
