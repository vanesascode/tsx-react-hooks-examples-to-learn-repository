import { useState, ChangeEvent } from "react";

const PrintInputValueOnClickUseState = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [printedValue, setPrintedValue] = useState<string>("");

  const printText = () => {
    console.log(inputValue);
    setPrintedValue(inputValue);
  };

  const setInputValueFunction = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        // onChange={(e) => setInputValue(e.target.value)}
        onChange={setInputValueFunction}
      />
      <button onClick={printText}>Print Value</button>
      <div>{printedValue}</div>
    </div>
  );
};

export default PrintInputValueOnClickUseState;
