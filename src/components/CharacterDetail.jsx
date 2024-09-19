import "../scss/detail.scss";
import { Link } from "react-router-dom";

function CharacterDetail({ data }) {
  return (
    <div>
      {data ? (
        <section className="containerDetail">
        <Link to="/" className="containerDetail__link">
        volver
      </Link>
        <article className="containerDetail__detail">
          <img className="containerDetail__detail--img" src={data.image} alt="" />
          <div>
          <h4>{data.name}</h4>
          <p>{data.house}</p>
          <p>{data.species}</p>
          <p>{data.gender}</p>
          <p>{data.alternate_names}</p>
          <p>{data.alive}</p>
          </div>
        </article>
        </section>  ) : <><Link to="/" className="containerDetail__link">
        volver
      </Link><p>⚠ ERROR: el personaje que buscas no existe  ⚠</p></>}
    </div>
  );
}

export default CharacterDetail;
