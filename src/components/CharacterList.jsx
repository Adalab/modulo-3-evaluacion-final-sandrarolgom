import CharacterCard from "./CharacterCard";

function CharacterList({ listCharacters, inputValue }) {
  //recorrer el array
  const htmlListCharacters = () => {
    return listCharacters.map((item, i) => (
      <CharacterCard key={i} character={item} />
    ));
  };
  return (
    <div className="container">
      {listCharacters.length === 0 ? (
        <p>{`No hay ningún personaje que coincida con ${inputValue}`}</p>
      ) : (
        htmlListCharacters()
      )}
    </div>
  );
}

export default CharacterList;
