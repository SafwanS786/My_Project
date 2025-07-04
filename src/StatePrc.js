// import React, { useState } from "react";
import React, { useState } from "react";
function StatePrc() {
  const [count, SetCount] = useState(0);
  const buttonStyle = {
    padding: "10px 20px",
    margin: "5px",
    fontSize: "16px",
    borderRadius: "8px",
    cursor: "pointer",
  };

  const resetStyle = {
    ...buttonStyle,
    backgroundColor: "#f44336",
    color: "white",
  };
  //    console.log("Component safwan");
  return (
    <div className="container text-center my-4">
      <h2>Count:{count}</h2>
      <div className="container my-3">
        <button style={buttonStyle} onClick={() => SetCount(count + 1)}>
          ➕ Increase
        </button>
        <button style={buttonStyle} onClick={() => SetCount(count - 1)}>
          ➖ Decrease
        </button>
        <button style={buttonStyle} onClick={() => SetCount(0)}>
          🔄 Reset
        </button>
      </div>
    </div>
  );
}
export default StatePrc;
