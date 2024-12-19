import { useState } from 'react';

const MyButton = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => setCount(count + 1);
  return <button onClick={handleClick}>Clicked {count} times</button>;
};

const UpdatingTheScreen = () => (
  <>
    <h1>Counters that update seperately</h1>
    <MyButton />
    <MyButton />
  </>
);

export default UpdatingTheScreen;
