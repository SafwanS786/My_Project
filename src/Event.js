import React from "react";

const Event = () => {
  const handleClick = () => {
    alert("The Button was Clicked");
  };
  const greet = (names) => {
    alert(`Hello ,${names}`);
  };
  return (
    <div>
      <div className="container my-3">
        <button onClick={handleClick}>Click Me</button>
        <button onClick={() => greet("Safwan")}>Names</button>
      </div>
    </div>
  );
};

export default Event;
