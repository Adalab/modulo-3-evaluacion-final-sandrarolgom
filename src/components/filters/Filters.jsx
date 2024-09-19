import FilterAlive from "./FilterAlive"
import FilterCharacter from "./FilterCharacter"
import FilterHouse from "./FilterHouse"

function Filters({changeInput, changeSelect, changeCheck, inputValue}) {
  return (
    <form className="form">
      <FilterCharacter changeInput={changeInput} inputValue={inputValue}/>
      <FilterHouse changeSelect={changeSelect} />
      <FilterAlive changeCheck={changeCheck}/>
    </form>
  )
}

export default Filters