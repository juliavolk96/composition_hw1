import React from 'react';
import Card from './components/Card';
import imageCat from './img/cat.png';
import './App.css';

function App() {
  return (
    <div className="container">
      <Card imageSrc={imageCat}>
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </Card>

      <Card>
        <h5 className="card-title">Card title without image</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </Card>
    </div>
  );
}

export default App;
