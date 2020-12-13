import React from "react";

import "./ViewMoreButton.scss";

function ViewMoreButton({ text = "More", onClick, className }) {
  return (
    <div
      className={`${className} SharedElement SharedElement__ViewMoreButton`}
      onClick={onClick}
    >
      View {text}
    </div>
  );
}

export default ViewMoreButton;
