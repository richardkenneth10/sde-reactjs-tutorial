const RespondingToEvents = () => {
  const handleClick = () => alert('You clicked me!');
  return (
    <>
      <button onClick={handleClick}>Click Me</button>
    </>
  );
};

export default RespondingToEvents;
