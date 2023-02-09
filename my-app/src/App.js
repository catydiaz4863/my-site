import './App.css';

import NavBar from './components/NavBar';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import CarouselHeader from './components/Carousel';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar></NavBar>
      </header>
      <body ClassName="App-body">        
        <CarouselHeader></CarouselHeader>
      </body>
    </div>
  );
}

export default App;
