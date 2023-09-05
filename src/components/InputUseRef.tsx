import { useRef, FormEvent } from "react";

const InputUseRef = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(emailRef.current?.value);
    console.log(passwordRef.current?.value);
  }

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" ref={emailRef} />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password" ref={passwordRef} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default InputUseRef;

//Initial value null as an argument to the useRef() hook. This allows us to initialize the emailRef and passwordRef with a default value of null:
