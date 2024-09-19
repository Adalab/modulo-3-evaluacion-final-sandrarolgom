function FilterAlive({ changeRadio, radioValue }) {
  const handleChange = (ev) => {
    changeRadio(ev.target.value);
  };
  return (
    <fieldset className="radio">
      <label htmlFor="status">
        Todos
        <input
          type="radio"
          name="status"
          value="all"
          onChange={handleChange}
          checked={radioValue === "all"}
          
        />
      </label>
      <label htmlFor="status">
        Vivos
        <input
          type="radio"
          name="status"
          value="true"
          onChange={handleChange}
          checked={radioValue === "true"}
        />
      </label>
      <label htmlFor="status">
        Muertos
        <input
          type="radio"
          name="status"
          value="false"
          onChange={handleChange}
          checked={radioValue === "false"}
        />
      </label>
    </fieldset>
  );
}
export default FilterAlive;
