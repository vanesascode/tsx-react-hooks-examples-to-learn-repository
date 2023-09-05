import { useState } from "react";
// import { useEffect } from "react";

export default function RedundantUseEffect() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  // const [fullName, setFullName] = useState("");

  //THIS makes rerender the app twice everytime we change the name:

  // useEffect(() => {
  //   setFullName(`${firstName} ${lastName}`);
  // }, [firstName, lastName]);

  //This is better:

  const fullName = `${firstName} ${lastName}`;

  return (
    <>
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <p>{fullName}</p>
    </>
  );
}
