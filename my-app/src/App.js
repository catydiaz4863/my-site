import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import CarouselHeader from './components/Carousel';
import NavBar from './components/NavBar';

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
