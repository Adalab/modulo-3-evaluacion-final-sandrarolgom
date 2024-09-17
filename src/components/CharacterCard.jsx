
function CharacterCard({character}) {
  return (
      <article className="container__item">
        <img className="container__item--img" src={character.image}/>
        <p className="container__item--p">{character.name}</p>
        <p className="container__item--p">{character.species}</p>
      </article>
  )
}

export default CharacterCard

 