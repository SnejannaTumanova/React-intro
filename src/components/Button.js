import React, { useEffect, useState } from "react";

const Button = ({ text = "button" }) => {
  const [click, setClick] = useState(0);

  useEffect(() => {
    document.title = `You clicked button ${click}`;
  }, [click]);

  return (
    <button onClick={() => setClick(click + 1)}>
      {text} {click}
    </button>
  );
};

export default Button;
