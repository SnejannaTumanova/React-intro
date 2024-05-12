import React, { useEffect, useState } from "react";

//Создание компонента внутри файла JS через стрелочную функцию (более профессионально)
const Button = (props) => {
  const [click, setClick] = useState(0);

  useEffect(() => {
    document.title = `You clicked button ${click}`;
  }, [click]);
  return (
    <button onClick={() => setClick(click + 1)}>
      {props.text} {click}
    </button>
  );
};

Button.defaultProps = {
  text: "button",
};

export default Button;
