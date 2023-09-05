import { useEffect, useState, ChangeEvent } from "react";

const PrintInputValueOnChange = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const validateInput = () => {
    if (inputValue === "") alert("The input cannot be empty");
  };

  useEffect(() => {
    console.log("input is being used", inputValue.length);
    if (inputValue.length === 5) {
      alert("Son más de 5 letras");
    }
  }, [inputValue]);

  const onChangeFunction = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
  };

  return (
    <div>
      <input
        type="text"
        // onChange={(e) => setInputValue(e.target.value)}
        onChange={onChangeFunction}
        value={inputValue}
      />
      <button onClick={validateInput}>Click</button>
      <div className="text-white">{inputValue}</div>
    </div>
  );
};

export default PrintInputValueOnChange;

//////////////////// DIFFERENCE BETWEEN THIS:

// onChange={(e) => setInputValue(e.target.value)}

//////////////////////// AND THIS:

// const onChangeFunction = (event: ChangeEvent<HTMLInputElement>) => {
//   const value = event.target.value;
//   setInputValue(value);
// };

// onChange={onChangeFunction}
