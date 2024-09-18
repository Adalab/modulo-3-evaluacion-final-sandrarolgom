import FilterCharacter from "./FilterCharacter"
import FilterHouse from "./FilterHouse"

function Filters({changeInput, changeSelect}) {
  return (
    <form className="form">
      <FilterCharacter changeInput={changeInput}/>
      <FilterHouse changeSelect={changeSelect} />
    </form>
  )
}

export default Filters