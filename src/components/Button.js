import React, { useEffect, useState } from "react";

const Button = (props) => {
  const [click, setClick] = useState(0);

  useEffect(() => {
    document.title = `You clicked button ${click}`;
  }, [click]);

  return (
    <button onClick={() => setClick(click + 1)}>
      {props.text || "button"} {click}
    </button>
  );
};

export default Button;
