import "../scss/detail.scss";
import { Link } from "react-router-dom";

function CharacterDetail({ data }) {
  return (
    <div>
      {data ? (
        <article className="detail">
          <Link to="/" className="detail__link">
            volver
          </Link>
          <img className="detail__img" src={data.image} alt="" />
          <h4 className="detail__title">{data.name}</h4>
          <p className="detail__p">{data.house}</p>
          <p className="detail__p">{data.species}</p>
          <p className="detail__p">{data.gender}</p>
          <p className="detail__p">{data.alternate_names}</p>
          <p className="detail__p">{data.alive}</p>
        </article>
      ) : null}
    </div>
  );
}

export default CharacterDetail;
