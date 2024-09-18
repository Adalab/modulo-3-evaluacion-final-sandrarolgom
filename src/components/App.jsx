import { useEffect, useState } from 'react';
import '../scss/index.scss';
import getDataApi from '../services/api.js'
import { Route, Routes } from 'react-router-dom';
import CharacterList from './CharacterList.jsx';
import Filters from './filters/Filters.jsx';

function App() {
  //VARIABLES DE ESTADO
  const [listCharacters, setListCharacters] = useState([]);
  //variable de estado para guardar el valor del input
  const [inputValue, setImputValue] = useState('');

  //FUNCIONES
  //función de ejecutar a getDataApi
  useEffect(()=>{
    getDataApi().then( (arrayData) => setListCharacters(arrayData))
  },[])

  //función para meter el valor del input en la variable de estado
  const changeInput = (value) => {
    setImputValue(value)
  }

  //función del filtrado del array original
  const filterCharacter = listCharacters.filter(item=>item.name.toLowerCase().includes(inputValue.toLowerCase()))


  return (
    <Routes>
      <Route path='/' element={
        <>
        <header className='header'><img className='header__logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Harry_Potter_wordmark.svg/800px-Harry_Potter_wordmark.svg.png" alt="" /></header>
        <Filters
        changeInput={changeInput} />
        <CharacterList listCharacters={filterCharacter}/>
        </>
      }/>
    </Routes>
  );
}

export default App;