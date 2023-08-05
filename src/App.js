import "./App.css";
import { useState } from "react";

function App() {
  const [result, setResult] = useState("");
  const [signEntered, setSign] = useState("");

  // const commafy = (num) => {
  //   const str = num.toString().split(".");
  //   if (str[0].length >= 5) {
  //     str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, "$1,");
  //   }
  //   if (str[1] && str[1].length >= 5) {
  //     str[1] = str[1].replace(/(\d{3})/g, "$1 ");
  //   }
  //   return str.join(".");
  // };

  const numberWithCommas = (x) => {
    const result = x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return result;
  };

  const handleClick = (e) => {
    setSign("");
    setResult(result.concat(e.target.name).toString());
    // console.log(setResult);
    // console.log(result);
  };

  // const operator = (x) => {
  //   if (result.charAt(result.length - 1) === "+" || "-" || "*" || "/") {
  //     result = x.toString().replace(/.$/, "+");
  //   }
  // };

  const sumClick = () => {
    if (signEntered === "+") return;
    setSign("+");
    setResult(result.concat("+", "").toString());
    // console.log(result);e

    console.log("sum", signEntered, result);
    if (signEntered && signEntered !== "+") {
      // backspace();

      setResult(result.replace(/.$/, "+").toString());
    }
  };

  const minusClick = () => {
    if (signEntered === "-") return;

    setSign("-");
    setResult(result.concat("-", "").toString());
    if (signEntered && signEntered !== "-") {
      setResult(result.replace(/.$/, "-").toString());

      console.log(signEntered);
    }
  };
  const multiClick = () => {
    if (signEntered === "*") return;
    setSign("*");
    setResult(result.concat("*", "").toString());
    if (signEntered && signEntered !== "*") {
      setResult(result.replace(/.$/, "*").toString());
    }
  };
  const diviClick = () => {
    if (signEntered === "/") return;
    setSign("/");
    setResult(result.concat("/", "").toString());
    if (signEntered && signEntered !== "/") {
      setResult(result.replace(/.$/, "/").toString());

      console.log(signEntered);
    }
  };

  const clear = () => {
    setSign();
    setResult("");
  };

  const presentage = () => {
    setResult(result / 100.0);
  };

  const backspace = () => {
    console.log("called");
    setResult(result.slice(0, -1));
  };

  const dotClick = () => {
    if (signEntered === ".") return;
    setSign(".");

    setResult(result.concat(".", "").toString());
    if (signEntered && signEntered !== ".") {
      setResult(result.replace(/.$/, ".").toString());

      console.log(signEntered);
    }
  };

  const calculate = () => {
    try {
      var value = result.replace(",", "");
      console.log(`Result:${result} -- Value:${value}`);
      setResult(eval(value).toString());

      console.log(result);
    } catch (err) {
      setResult("Error");
    }
  };

  return (
    <>
      <div className="container">
        <div className="calculator">
          <form>
            <input type="text" value={numberWithCommas(result)} />
          </form>

          <div className="keypad">
            <button className="highlight" onClick={clear} id="clear">
              AC
            </button>
            <button className="highlight" onClick={backspace} id="backspace">
              <img src="https://img.icons8.com/ios-glyphs/30/000000/clear-symbol.png" />
            </button>
            <button className="highlight" onClick={presentage}>
              %
            </button>
            <button className="highlight" name="/" onClick={diviClick}>
              &divide;
            </button>
            <button name="7" onClick={handleClick}>
              7
            </button>
            <button name="8" onClick={handleClick}>
              8
            </button>
            <button name="9" onClick={handleClick}>
              9
            </button>
            <button className="highlight" name="*" onClick={multiClick}>
              &times;
            </button>
            <button name="4" onClick={handleClick}>
              4
            </button>
            <button name="5" onClick={handleClick}>
              5
            </button>
            <button name="6" onClick={handleClick}>
              6
            </button>
            <button className="highlight" name="-" onClick={minusClick}>
              &ndash;
            </button>
            <button name="1" onClick={handleClick}>
              1
            </button>
            <button name="2" onClick={handleClick}>
              2
            </button>
            <button name="3" onClick={handleClick}>
              3
            </button>
            <button className="highlight" name="+" onClick={sumClick}>
              +
            </button>
            <button name="0" onClick={handleClick}>
              0
            </button>
            <button name="." onClick={dotClick}>
              .
            </button>
            <button className="highlight" onClick={calculate} id="result">
              =
            </button>
          </div>
        </div>
        <div className="footer">
          <h2>
            Developed by{" "}
           
              <span> Malith</span>
            
          </h2>
        </div>
      </div>
    </>
  );
}

export default App;
