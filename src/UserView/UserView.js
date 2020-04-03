import React from "react";
import clsx from "clsx";
import Draggable from "react-draggable";
import classes from "./UserView.module.css";

const UserView = ({ src }) => {
  if (src == null) return null;

  const srcRef = (node) => {
    if (node != null) {
      // eslint-disable-next-line no-param-reassign
      node.srcObject = src;
    }
  };

  return (
    <Draggable
      axis="both"
      handle=".userHandle"
      defaultPosition={{
        x: 0,
        y: 0,
      }}
      position={null}
      scale={1}
    >
      <div className={clsx("userHandle", classes.root)}>
        <video width={320} autoPlay playsInline ref={srcRef} />
      </div>
    </Draggable>
  );
};

export default UserView;
