import React, { useEffect, useState } from "react";
import "./App.css";
function App() {
  const [random, setRandom] = useState(true);
  const changeState = () => {
    setRandom({ random: !random });
  };
  const [data, setData] = useState([{}]);
  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
    console.log("sending fetch req..");
  }, [random]);
  return (
    <div className="center">
      <h3 style={{ textAlign: "center" }}>
        Hey OSFD folks generate a Random Number here!
      </h3>
      {typeof data.users === "undefined" ? (
        <p>Loading your random Number....</p>
      ) : (
        data.users.map((number, i) => (
          <p style={{ textAlign: "center", fontSize: "large" }} key={i}>
            {number}
          </p>
        ))
      )}

      <button
        className="vertical-center"
        onClick={() => {
          changeState();
        }}
      >
        Click to Generate Random Number
      </button>
    </div>
  );
}

export default App;
