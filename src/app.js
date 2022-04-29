import Card from './components/card';
import Header from './components/header';
import Hero from './components/hero';
import data from './data';

const App = () => {
    const cardElements = data.map(card => {
        return <Card
            key={`${card.id}`}
            card={card}
        />
    })
    return (
    <>
        <Header />
        <Hero />
        <div className='row d-flex justify-content-around'>
            {cardElements}
        </div>
    </>
    )

}

export default App;