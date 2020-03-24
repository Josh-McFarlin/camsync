import React from "react";
import ReactDOM from "react-dom";
import WebcamView from "../WebcamView";
import "./styles.css";

const Main = () => (
  <>
    <WebcamView />
  </>
);

const app = document.createElement("div");
app.id = "camsync-app";
document.body.appendChild(app);
ReactDOM.render(<Main />, app);

console.log("Content scripts has loaded");
