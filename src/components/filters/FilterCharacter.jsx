function FilterCharacter({changeInput}) {
  //función manejadora del evento onchange
  const handleChangeName = (ev) => {
    changeInput(ev.target.value)
  }

  return (
    <>
    <label>Busca por personaje:</label>
    <input type="text" onChange={handleChangeName} />
    </>
  )
}

export default FilterCharacter