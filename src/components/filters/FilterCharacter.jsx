function FilterCharacter({changeInput}) {
  //función manejadora del evento onchange
  const handleChangeName = (ev) => {
    ev.preventDefault();
    changeInput(ev.target.value)
  }

  return (
    <>
    <label htmlFor="name">Busca por personaje:</label>
    <input name="name" type="text" onChange={handleChangeName} />
    </>
  )
}

export default FilterCharacter