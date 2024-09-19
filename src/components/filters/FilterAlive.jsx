function FilterAlive({ changeCheck }) {
  const handleChange = (ev) => {
    changeCheck(ev.target.value);
  };
  return (
    <fieldset className="checkbox">
      <label htmlFor="status">
        Vivo
        <input
          type="radio"
          name="status"
          value="true"
          onChange={handleChange}
        />
      </label>
      <label htmlFor="status">
        Muerto
        <input
          type="radio"
          name="status"
          value="false"
          onChange={handleChange}
        />
      </label>
    </fieldset>
  );
}
export default FilterAlive;
