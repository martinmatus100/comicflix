//import logo from './logo.svg';
import './App.scss';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Header/>
      <main className='mainBox'>
        <ItemListContainer greeting="ENVÍO GRATIS A PARTIR DE $5000" />
        {/* <div className='card'>
          <span className='card__name'>Comics Marvel</span>
          <p className='card__description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim minus suscipit sunt minima repellendus asperiores recusandae ullam hic magnam, voluptates quia cumque architecto adipisci alias laudantium ab. Soluta, reprehenderit. Quisquam?</p>
          <span className='card__price'>$10.00</span>
          <span className='card__stock'>Quedan 5</span>
        </div>
        <div className='card'>
          <span className='card__name'>Comics Marvel</span>
          <p className='card__description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim minus suscipit sunt minima repellendus asperiores recusandae ullam hic magnam, voluptates quia cumque architecto adipisci alias laudantium ab. Soluta, reprehenderit. Quisquam?</p>
          <span className='card__price'>$10.00</span>
          <span className='card__stock'>Quedan 5</span>
        </div>
        <div className='card'>
          <span className='card__name'>Comics Marvel</span>
          <p className='card__description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim minus suscipit sunt minima repellendus asperiores recusandae ullam hic magnam, voluptates quia cumque architecto adipisci alias laudantium ab. Soluta, reprehenderit. Quisquam?</p>
          <span className='card__price'>$10.00</span>
          <span className='card__stock'>Quedan 5</span>
        </div>
        <div className='card'>
          <span className='card__name'>Comics Marvel</span>
          <p className='card__description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim minus suscipit sunt minima repellendus asperiores recusandae ullam hic magnam, voluptates quia cumque architecto adipisci alias laudantium ab. Soluta, reprehenderit. Quisquam?</p>
          <span className='card__price'>$10.00</span>
          <span className='card__stock'>Quedan 5</span>
        </div> */}
      </main>
      <footer className='footer'>
      </footer>
    </div>
  );
}

export default App;
