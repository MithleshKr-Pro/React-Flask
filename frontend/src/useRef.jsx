import React, { useRef } from "react";
const UseRefHook = () => {
  const inputRef = useRef(null);
  const clickBtn = () => {
    inputRef.current.focus();
  };
  return (
    <>
      <h2>UseRef Hook</h2>
      <input ref={inputRef} type="text" />
      <button onClick={clickBtn}>Click to Focus on Input</button>
    </>
  );
};
export default UseRefHook;
