import React from "react";
import "./Popup.css";
import * as browser from "webextension-polyfill";

const Popup = () => {
  const [myId, setMyId] = React.useState("");
  const [newUser, setNewUser] = React.useState("");

  React.useState(() => {
    // eslint-disable-next-line no-undef
    chrome.storage.sync.get(["CamSyncID"], (result) => {
      setMyId(result.CamSyncID);
      console.log(`Value currently is ${result}`);
    });
  }, []);

  const addUser = () => {
    browser.runtime.sendMessage({
      type: "newCall",
      peerId: newUser,
    });

    setNewUser("");
  };

  return (
    <div className="popup">
      <h2>My ID: {myId}</h2>
      <input onChange={(e) => setNewUser(e.target.value)} />
      <button onClick={addUser}>Submit</button>
    </div>
  );
};

export default Popup;
