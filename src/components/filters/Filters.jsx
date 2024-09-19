import FilterAlive from "./FilterAlive"
import FilterCharacter from "./FilterCharacter"
import FilterHouse from "./FilterHouse"

function Filters({changeInput, changeSelect, changeRadio, inputValue, selectValue, radioValue}) {
  return (
    <form className="form">
      <FilterCharacter changeInput={changeInput} inputValue={inputValue}/>
      <FilterHouse changeSelect={changeSelect} selectValue={selectValue}/>
      <FilterAlive changeRadio={changeRadio} radioValue={radioValue}/>
    </form>
  )
}

export default Filters