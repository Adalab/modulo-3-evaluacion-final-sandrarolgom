import { Link } from "react-router-dom"

function CharacterDetail({data}) {
  
  return (
    <div>
      <Link to="/">volver</Link>
        <img src={data.image} alt="" />
        <h4>{data.name}</h4>
        <p>{data.house}</p>
        <p>{data.species}</p>
        <p>{data.gender}</p>
        <p>{data.alternate_names}</p>
        <p>{data.alive}</p>
    </div>
  )
}

export default CharacterDetail


