import { useState } from "react";

const AddClassByChoosing = () => {
  const [selectedCircle, setSelectedCircle] = useState<string | null>(null);

  const handleCircleClick = (circle: string | null): void => {
    setSelectedCircle(circle);
  };

  return (
    <div className="container">
      <div
        className={`p-3  ${selectedCircle === "circle1" ? "bg-red-500" : ""}`}
        onClick={() => handleCircleClick("circle1")}
      ></div>
      <div
        className={`p-3  ${selectedCircle === "circle2" ? "bg-red-500" : ""}`}
        onClick={() => handleCircleClick("circle2")}
      ></div>
      <div
        className={`p-3  ${selectedCircle === "circle3" ? "bg-red-500" : ""}`}
        onClick={() => handleCircleClick("circle3")}
      ></div>
    </div>
  );
};

export default AddClassByChoosing;

//The initial value of selectedCircle is set to null, and the setSelectedCircle function is used to update the value of selectedCircle. The type of selectedCircle is specified as string | null, indicating that it can hold a value of type string or null.

//The second occurrence of circle in the code does not explicitly specify a type because it is a parameter of the handleCircleClick function, and its type is already defined in the function signature
