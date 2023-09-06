import { useState, useEffect, useMemo } from "react";

const UseMemoEfficiency = () => {
  const [age, setAge] = useState<number>(0);
  const [name, setName] = useState<string>("");
  const [darkmode, setDarkmode] = useState<boolean>(false);

  //INSTEAD OF THIS:

  // const person = {
  //   age,
  //   name,
  // };

  //THIS:

  const person = useMemo(() => {
    return { age, name };
  }, [age, name]);

  useEffect(() => {
    console.log(person);
  }, [person]);

  //Otherwise, everytime you are changing the darkmode, the useEffect is also console.logging the person.

  return (
    <div
      style={{
        color: darkmode ? "white" : "black",
        background: darkmode ? "black" : "white",
        padding: "1rem",
      }}
    >
      <label htmlFor="name">Name:</label>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="age">Age:</label>

      <input
        type="text"
        value={age}
        onChange={(e) => setAge(parseInt(e.target.value))}
      />

      {/* In the provided code, the age state is defined as a number, but the value attribute of the age input is expecting a string, so, we use "parseInt" to convert the input value to a number */}

      <label htmlFor="darkmode">Darkmode:</label>

      <input
        type="checkbox"
        checked={darkmode}
        onChange={(e) => setDarkmode(Boolean(e.target.checked))}
      />
    </div>
  );
};

export default UseMemoEfficiency;

//In the given code, the useMemo hook is used to memoize the person object.

// By default, React components re-render whenever their state or props change. In this case, the person object is derived from the age and name state variables. Without using useMemo, the person object would be re-created on every re-render of the component, even if age or name haven't changed.

// By wrapping the computation of the person object with useMemo, the object is only re-computed when the dependencies (age and name) change. This can improve performance by preventing unnecessary re-computations of the person object.

// In the provided code, the person object is only logged in the useEffect hook when the person object changes. This ensures that the useEffect hook only runs when the age or name values change, and not when darkmode changes.

///////////////////////////////////////////////////////////////////////////

// if you're using things like objects arrays
// or any other value that is compared
// using referential equality, you need to
// make sure that you're not actually
// creating a new version of that object or
// array on every re-render, otherwise your
// use effect is never going to do anything
// like you want it to
