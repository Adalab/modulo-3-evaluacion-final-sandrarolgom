import { useEffect, useState } from 'react';
import '../scss/index.scss';
import getDataApi from '../services/api.js'
import { Route, Routes } from 'react-router-dom';
import CharacterList from './CharacterList.jsx';

function App() {
  //variables de estado
  const [listCharacters, setListCharacters] = useState([]);

  //funciones
  //función de ejecutar a getDataApi
  useEffect(()=>{
    getDataApi().then( (arrayData) => setListCharacters(arrayData))
  },[])
  
  return (
    <Routes>
      <Route path='/' element={
        <>
        <header className='header'><img className='header__logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Harry_Potter_wordmark.svg/800px-Harry_Potter_wordmark.svg.png" alt="" /></header>
        <CharacterList listCharacters={listCharacters}/>
        </>
      }/>
    </Routes>
  );
}

export default App;