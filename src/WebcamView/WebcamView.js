import React from "react";
import clsx from "clsx";
import Draggable from "react-draggable";
import WebcamHelper from "react-webcam";
import classes from "./WebcamView.module.css";

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user",
};

const WebcamView = () => {
  const webcamRef = React.useRef(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
  }, [webcamRef]);

  return (
    <Draggable
      axis="both"
      handle=".webcamHandle"
      defaultPosition={{
        x: 0,
        y: 0,
      }}
      position={null}
      scale={1}
    >
      <div className={clsx("webcamHandle", classes.root)}>
        <WebcamHelper
          audio
          width={320}
          height={180}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
        />
        <button onClick={capture} type="button">
          Capture photo
        </button>
      </div>
    </Draggable>
  );
};

export default WebcamView;
