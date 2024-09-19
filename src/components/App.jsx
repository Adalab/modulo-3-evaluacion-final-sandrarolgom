import { useEffect, useState } from 'react';
import '../scss/index.scss';
import getDataApi from '../services/api.js'
import { Route, Routes, useLocation, matchPath} from 'react-router-dom';
import CharacterList from './CharacterList.jsx';
import Filters from './filters/Filters.jsx';
import CharacterDetail from './CharacterDetail.jsx';
import ResetButton from './ResetButton.jsx';

function App() {
  //VARIABLES DE ESTADO-----
  const [listCharacters, setListCharacters] = useState([]);
  //variable de estado para guardar el valor del input
  const [inputValue, setInputValue] = useState('');
  //variable de estado para guardar el value del select
  const [selectValue, setSelectValue] = useState('gryffindor');

  //FUNCIONES---------------
  //función de ejecutar a getDataApi
  useEffect(()=>{
    getDataApi(selectValue).then((arrayData) =>{
      //funcionalidad orden alfabético
      const sortedData = arrayData.sort((a,b) => a.name.localeCompare(b.name));
      setListCharacters(sortedData);
    })
  },[selectValue])

  //función para meter el valor del input en la variable de estado
  const changeInput = (value) => {
    setInputValue(value)
  }

  //función para meter el valor del select en la variable de estado
  const changeSelect = (value) => {
    setSelectValue(value)
  }

  //función del filtrado del array original
  const filterCharacter = listCharacters.filter(item=>item.name.toLowerCase().includes(inputValue.toLowerCase()))

  //función para pasar la variable de estado a vacía y volver a pintar el array original
  const resetCharacter = () => {
    setInputValue('');
    setListCharacters(listCharacters)
  }
   
  //crear una constante para recoger la ruta en la que estoy parada
  const {pathname} = useLocation();
  //como hay diferentes rutas, nos interesa información de la ruta solo si es la ruta dinámica, hacemos una validación: si la ruta del path coincide con la de pathname, entonces quiero sacar el (nombre) y si no, no quiero sacar nada
  const characterRoute = matchPath("/detail/:id", pathname)
  //cuando lo anterior devuelva verdadero, voy a coger el nombre :name
  const nameCharacter = characterRoute ? characterRoute.params.id : null
  //de mi array, buscame(por cada item ==> búscame el item cuyo name sea === al name que saqué de la ruta)
  const character = listCharacters.find(item=>item.id === nameCharacter)
  
  return (
    <Routes>
      <Route path='/' element={
        <>
        <header className='header'><img className='header__logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Harry_Potter_wordmark.svg/800px-Harry_Potter_wordmark.svg.png" alt="" /></header>
        <Filters
        changeInput={changeInput}
        changeSelect={changeSelect}
        inputValue={inputValue} />
        <ResetButton resetCharacter={resetCharacter}/>
        <CharacterList 
        listCharacters={filterCharacter}
        inputValue={inputValue}
        />
        </>
      }/>
      {/* crear la ruta al componente details */}
      <Route path="/detail/:id" element={<CharacterDetail data={character}/>}/>
    </Routes>
  );
}

export default App;