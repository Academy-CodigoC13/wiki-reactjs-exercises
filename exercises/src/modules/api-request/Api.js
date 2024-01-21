import React, { useState } from "react";
import Axios from "axios";
import "./Api.css";

const Api = () => {
  const [joke, setJoke] = useState("");
  const getJoke = () => {
    Axios.get("https://official-joke-api.appspot.com/random_joke").then(
      (response) => {
        console.log(response);
        setJoke(response.data.setup + " " + response.data.punchline);
      }
    );
  };
  return (
    <div className="Api">
      Hello world <button onClick={getJoke}>Get a joke right now!</button>
      <p>{joke}</p>
    </div>
  );
};
export default Api;
