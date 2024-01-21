import React, { useState } from "react";
import Axios from "axios";
import showAlert from "../alert/Alert";
import "./Api.css";

const Api = () => {
  const [joke, setJoke] = useState("");
  const getJoke = () => {
    Axios.get("https://official-joke-api.appspot.com/random_joke") // change the url to test the error
      .then((response) => {
        setJoke(response.data.setup + " " + response.data.punchline);
        if (response.data.setup === "") {
          showAlert(
            "top-end",
            "error",
            "Error!",
            "The request could not be processed",
            2000
          );
        } else {
          showAlert(
            "top-end",
            "success",
            "Success!",
            "Joke successfully requested",
            2000
          );
        }
      })
      .catch((error) => {
        showAlert(
          "top-end",
          "error",
          "Error!",
          "The request could not be processed",
          2000
        );
      });
  };
  return (
    <div className="Api">
      Hello world <button onClick={getJoke}>Get a joke right now!</button>
      <p>{joke}</p>
    </div>
  );
};
export default Api;
