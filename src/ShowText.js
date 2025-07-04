import React, { useState } from "react";

export default function ShowText() {
  const [show, setShow] = useState(true);
  return (
    <div>
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
      {show && <p>This is a toggled message.</p>}
    </div>
  );
}
