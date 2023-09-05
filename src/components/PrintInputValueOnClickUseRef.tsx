import { useRef, useState } from "react";

const PrintInputValueOnClickUseRef = () => {
  const textRef = useRef<HTMLInputElement>(null);
  const [printedValue, setPrintedValue] = useState<string>("");

  const printText = () => {
    const value = textRef.current?.value;
    console.log(value);
    setPrintedValue(value || "");
  };

  return (
    <div>
      <input type="text" ref={textRef} />
      <button onClick={printText}>Print</button>
      <div>{printedValue}</div>
    </div>
  );
};

export default PrintInputValueOnClickUseRef;
