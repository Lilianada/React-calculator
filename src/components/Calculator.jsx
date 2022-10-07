import "../components/assets/styles/style.css";
import React, { useState } from "react";

function Calculator() {
  const btnValues = [
    ["Clear", "C", "%", "/"],
    [7, 8, 9, "x"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
  ];

  const [result, setResult] = useState("");
  const handleClick = (event) => {
    setResult(result.concat(event.target.name));
    if (event.target.name === "Clear" || event.target.name === "C") {
      setResult(eval(result));
    }

    if (event.target.name === "Clear") {
      setResult("");
    }

    if (event.target.name === "x") {
      setResult(result.concat("*"));
    }

    if (event.target.name === "C") {
      setResult(result.slice(0, -1));
    }

    if (event.target.name === "=") {
      try {
        setResult(eval(result).toString());
      } catch (error) {
        setResult('');
      }
    }
  };

  return (
    <main className="wrapper">
      <div className="calculatorContainer">
        <div className="calculator">
          <input
            type="text|number"
            name="display-input"
            className="calculator_displayInput"
            maxLength={8}
            value={result}
            readOnly
          />
          <div className="calculator_table">
            {btnValues.flat().map((btn, i) => {
              return (
                <button
                  key={i}
                  className={btn === "+" ? "plusSign" : ""}
                  name={btn}
                  onClick={handleClick}
                >
                  {btn}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Calculator;
