import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2015_N_logo.svg/1200px-Netflix_2015_N_logo.svg.png"} className="header__logo" alt="logo"></img>
        <div className='header__nav'><h3>Marvel</h3><h3>DC</h3><h3>Comics</h3></div>
        <div className='header__buttons'><button>Carrito</button></div>
      </header>
      <main className='mainBox'>
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
        </div>
        <div className='card'>
          <span className='card__name'>Comics Marvel</span>
          <p className='card__description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim minus suscipit sunt minima repellendus asperiores recusandae ullam hic magnam, voluptates quia cumque architecto adipisci alias laudantium ab. Soluta, reprehenderit. Quisquam?</p>
          <span className='card__price'>$10.00</span>
          <span className='card__stock'>Quedan 5</span>
        </div>
      </main>
      <footer className='footer'>
        <h3 className='footer__item'>Marvel</h3>
        <h3 className='footer__item'>DC</h3>
        <h3 className='footer__item'>Comics</h3>
      </footer>
    </div>
  );
}

export default App;
