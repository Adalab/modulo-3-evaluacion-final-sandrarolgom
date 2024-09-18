import FilterCharacter from "./FilterCharacter"

function Filters({changeInput}) {
  return (
    <form>
      <FilterCharacter changeInput={changeInput}/>
    </form>
  )
}

export default Filters