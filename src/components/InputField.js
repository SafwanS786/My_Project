import React, { useState } from "react";

export const InputField = () => {
  const [text, setText] = useState("");
  const [SurName, SetSurName] = useState("");
  const [FullName, SetFullName] = useState("");
  const submit = () => {
    SetFullName(`${text} ${SurName}`);
  };
  return (
    <div>
      EnterName:
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      EnterSurName:
      <input
        type="text"
        value={SurName}
        onChange={(e) => SetSurName(e.target.value)}
      />
      <button onClick={submit}>Submit</button>
      {/* <p>The Name is:{text}</p>
      <p>The Name is:{SurName}</p> */}
      {FullName && <p>The Full Name is:{FullName}</p>}
      {/* <button></button> */}
      {/* <p>You typed: {text}</p> */}
    </div>
  );
};
