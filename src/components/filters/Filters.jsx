import FilterCharacter from "./FilterCharacter"
import FilterHouse from "./FilterHouse"

function Filters({changeInput, changeSelect, inputValue}) {
  return (
    <form className="form">
      <FilterCharacter changeInput={changeInput} inputValue={inputValue}/>
      <FilterHouse changeSelect={changeSelect} />
    </form>
  )
}

export default Filters