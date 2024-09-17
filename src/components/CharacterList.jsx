import CharacterCard from "./CharacterCard"

function CharacterList({listCharacters}) {
    //recorrer el array
    const htmlListCharacters = () => {
        return listCharacters.map((item, i) => ( <CharacterCard key={i} character={item}/>
            
        ))
    }
  return (
    <div className="container">
        {htmlListCharacters()}
    </div>
  )
}

export default CharacterList