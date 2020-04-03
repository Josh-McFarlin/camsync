import React from "react";
import ReactDOM from "react-dom";
import Peer from "peerjs";
import WebcamView from "../WebcamView";
import UserView from "../UserView";
import "./styles.css";

const constraints = {
  audio: true,
  video: { width: 1280, height: 720 },
};

const Main = () => {
  const [streams, setStreams] = React.useState([]);

  React.useEffect(() => {
    const peer = new Peer();

    peer.on("open", () => {
      console.log("My CamSync ID is:", peer.id);

      // eslint-disable-next-line no-undef
      chrome.storage.sync.set({ CamSyncID: peer.id });
    });

    // eslint-disable-next-line no-undef
    chrome.runtime.onMessage.addListener((message, sender, respond) => {
      switch (message.type) {
        case "newCall": {
          const { peerId } = message;

          navigator.mediaDevices
            .getUserMedia(constraints)
            .then((stream) => {
              const call = peer.call(peerId, stream);

              call.on("stream", (remoteStream) => {
                setStreams((prevStreams) => [...prevStreams, remoteStream]);
              });
            })
            .catch((err) => {
              console.error("Failed to get local stream", err);
            });

          break;
        }
        default: {
          console.log(message);
        }
      }

      respond({ success: true });
    });

    peer.on("call", (call) => {
      navigator.mediaDevices
        .getUserMedia(constraints)
        .then((stream) => {
          call.answer(stream); // Answer the call with an A/V stream.

          call.on("stream", (remoteStream) => {
            setStreams((prevStreams) => [...prevStreams, remoteStream]);
          });
        })
        .catch((err) => {
          console.error("Failed to get local stream", err);
        });
    });
  }, []);

  return (
    <>
      <WebcamView />
      {streams.map((stream) => (
        <UserView src={stream} key={stream.id} />
      ))}
    </>
  );
};

const app = document.createElement("div");
app.id = "camsync-app";
document.body.appendChild(app);
ReactDOM.render(<Main />, app);

console.log("Content scripts has loaded");
