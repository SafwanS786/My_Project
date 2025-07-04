import React, { useState } from "react";
import Navbar from "../Navbar";

export default function About() {
  const [mystyle, setMyStyle] = useState({
    color: "white",
    backgroundColor: "black",
  });

  const [accOpen, setAccOpen] = useState(false);

  const [btntext, setBtnText] = useState("Enable Light Mode");

  const togglestyle = () => {
    if (mystyle.color == "white") {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtnText("Enable Dark Mode");
    } else {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
      });
      setBtnText("Enable Light Mode");
    }
  };

  const handleOpenAcc = () => {
    setAccOpen(!accOpen);
  };

  return (
    <div className="container">
      <h1 className="my-3">About us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
          >
            <div className="accordion-body" style={mystyle}>
              <strong>This is the first item’s accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It’s also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body" style={mystyle}>
              <strong>This is the second item’s accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It’s also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body">
              <div className="accordion-body" style={mystyle}>
                <strong>Welcome to the About Section</strong> This app is built
                using React and Bootstrap. Here you can find details about the
                features and functionality of the project.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <button onClick={togglestyle} type="button" className="btn btn-primary">
          {btntext}
        </button>
      </div>
      <h1>New Accordions</h1>
      <span onClick={handleOpenAcc}>Open Acc</span>
      {accOpen && (
        <p>
          Accordion Data Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Quibusdam, eos.
        </p>
      )}
    </div>
  );
}
