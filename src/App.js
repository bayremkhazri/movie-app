import { useState } from 'react';
import './App.css';
import Movieslist from './components/Movieslist';
import 'bootstrap/dist/css/bootstrap.min.css';
import { moviesData } from './Data';


function App() {
  const [movies, setmovies ]= useState(moviesData);
  return (
    <div className="App">
      
<Movieslist movies={movies}/>

    </div>
  );
}

export default App;
