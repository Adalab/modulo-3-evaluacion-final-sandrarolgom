import { useEffect, useState } from 'react';
import '../scss/index.scss';
import getDataApi from '../services/api.js'

function App() {
  //variables de estado
  const [listCharacters, setListCharacters] = useState([]);

  //funciones
  //función de ejecutar a getDataApi
  useEffect(()=>{
    getDataApi().then( (arrayData) => setListCharacters(arrayData))
  },[])
  
  return (
    <>
      <h1>Template</h1>
    </>
  );
}

export default App;