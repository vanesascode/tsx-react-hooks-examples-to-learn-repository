import { useEffect, useState } from "react";

const CorrectCounter = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    console.log(count);
  }, [count]); ////it's always going to be the correct number

  ////////////////////////////////////////////////////////////////////////////////
  //NO::::::::::::::::
  // function handleClick(amount: number): void {
  //   setCount(count + amount);
  // }

  //INSTEAD, USE PREV or THE FUNCTION VERSION OF setCount:

  function handleClick(amount: number): void {
    setCount((currentCount) => {
      return currentCount + amount;
    });
    console.log(count); //it's always going to be a number before
  }

  // function handleClick(amount: number): void {
  //   setCount((prevCount) => prevCount + amount);
  // }

  ////////////////////////////////////////////////////////////////////////////////

  return (
    <>
      <button onClick={() => handleClick(-1)}> - </button>
      {count}
      <button onClick={() => handleClick(1)}> + </button>
    </>
  );
};

export default CorrectCounter;

// whenever you
// call set count or set whatever state
// variable you have this happens
// asynchronously:
// that means that this count variable
// right here or your state variable does
// not get updated until the next render

// instead of putting some code after your
// state Setter instead what you want to do
// is use a use effect
