import Card from './components/card';
import Header from './components/header';
import Hero from './components/hero';

const App = () => {
    return (
    <>
        <Header />
        <Hero />
        <Card
        img = "zaferes.png"
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life Lessons with Katie Zaferes"
        price={136}
        />
    </>
    )

}

export default App;