import { Link } from "react-router-dom";

function CharacterCard({ character }) {
  return (
    <article className="container__item">
      <Link to={`/detail/${character.id}`}>
        <img className="container__item--img" src={character.image} />
        <p className="container__item--p">{character.name}</p>
        <p className="container__item--p">{character.species}</p>
      </Link>
    </article>
  );
}

export default CharacterCard;
