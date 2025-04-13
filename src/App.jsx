import React, {useState} from 'react'
import Gallery from './components/Gallery'

function App() {
  const [cards, setCards] = useState([]);

  const removeCard = (id) => {
    setCards((prevCards) => prevCards.filter((card) => card.id !== id));
  }

  return (
    <main>
      <h1 className='web-head'> Explore our Tours!</h1>
      <Gallery cards={cards} setCards={setCards} onRemove={removeCard} />
    </main>
  )
}

export default App
