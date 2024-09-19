function ResetButton({ resetCharacter }) {
  const handleClick = () => {
    resetCharacter();
  };
  return (
    <button className="reset" onClick={handleClick}>
      reset
    </button>
  );
}

export default ResetButton;
