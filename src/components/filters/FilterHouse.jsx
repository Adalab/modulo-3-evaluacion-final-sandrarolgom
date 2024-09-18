function FilterHouse({changeSelect}) {
  const handleChangeSelect = (ev) => {
    changeSelect(ev.target.value)
  }
  return (
    <>
    <label htmlFor="select">Selecciona la casa:</label>
    <select name="select" onChange={handleChangeSelect}>
        <option value="gryffindor">Gryffindor</option>
        <option value="hufflepuff">Hufflepuff</option>
        <option value="ravenclaw">Ravenclaw</option>
        <option value="slytherin">Slytherin</option>
    </select>
    </>
  )
}

export default FilterHouse