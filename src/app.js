import Card from './components/card';
import Header from './components/header';
import Hero from './components/hero';
import data from './data';

const App = () => {
    const cardElements = data.map(card => {
        return <Card
            key={`${card.id}`}
            img={card.coverImg}
            rating={card.stats.rating}
            reviewCount={card.stats.reviewCount}
            location={card.location}
            title={card.title}
            price={card.price}
        />
    })
    return (
    <>
        <Header />
        <Hero />
        {cardElements}
    </>
    )

}

export default App;