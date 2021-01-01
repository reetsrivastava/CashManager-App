import React, { useState } from "react";
import "./styles.css";

// var remainder, quotient;
var noteArray = [2000, 1000, 500, 200, 100, 50, 10, 5];
var cashName = ["2000", "1000", "500", "200", "100", "50", "10", "5"];
var amtArray = [];

export default function App() {
  var [bill, setBill] = useState("");
  var [amount, setAmount] = useState("");
  var [freeChange, setFreeChange] = useState("");
  var [noteReturn, setNoteReturn] = useState("");
  function billChange(event) {
    var bill = event.target.value;
    setBill(bill);
  }

  function userAmountChange(event) {
    var amount = event.target.value;
    setAmount(amount);
  }
  function displayChange() {
    if (amount < bill) {
      alert("Please pay full bill.. Udhar is not allowed");
    } else {
      var freeChange = amount - bill;
      setFreeChange(freeChange);

      var userChange = freeChange;
      // console.log(userChange);
      for (var i = 0; i < noteArray.length; i++) {
        amtArray[i] = Math.trunc(userChange / noteArray[i]);
        noteReturn = amtArray[i];
        setNoteReturn(noteReturn);
        console.log(noteReturn);
        userChange = userChange % noteArray[i];
        // console.log(amtArray[i]);
      }
    }
  }

  return (
    <div className="App">
      <h1>Cash karo</h1>
      <p>Please input the bill amount:</p>
      <input type="number" onChange={billChange} placeholder="Bill" />
      {/* <span>{bill}</span> */}
      <p>Please input the change amount you have:</p>
      <input
        type="number"
        onChange={userAmountChange}
        placeholder="Paid Amount"
      />
      {/* <span>{amount}</span> */}
      <button onClick={displayChange}>Calculate the change distribution</button>
      <div className="amtReturn">
        Amount Returned
        <hr />
        <strong>₹ {freeChange}</strong>
      </div>

      {amtArray.map((item, index) => (
        <div className="item">
          <p>💰 ₹{cashName[index]}</p>
          <p>💸 {amtArray[index]}</p>
        </div>
      ))}
      <hr />
      <footer>
        This is a simple change cash calculator. Check your Return Amount and
        change you get.
        <p>
          Made with ❤️ by <a href="portfoliors.netlify.app">Reet Srivastava</a>{" "}
        </p>{" "}
      </footer>
    </div>
  );
}
