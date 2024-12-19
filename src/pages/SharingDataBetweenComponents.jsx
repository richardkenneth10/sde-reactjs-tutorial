import { useState } from 'react';

const MyButton = ({ count, onClick }) => {
  return <button onClick={onClick}>Clicked {count} times</button>;
};

const SharingDataBetweenComponents = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount(count + 1);

  return (
    <>
      <h1>Counters that update seperately</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </>
  );
};

export default SharingDataBetweenComponents;
