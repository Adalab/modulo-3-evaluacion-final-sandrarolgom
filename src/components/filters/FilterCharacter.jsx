function FilterCharacter({ changeInput, inputValue }) {
  //función manejadora del evento onchange
  const handleChangeName = (ev) => {
    changeInput(ev.target.value);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };

  return (
    <>
      <label htmlFor="name">Busca por personaje:</label>
      <input
        name="name"
        value={inputValue}
        type="text"
        onChange={handleChangeName}
        onKeyDown={handleKeyDown}
      />
    </>
  );
}

export default FilterCharacter;
