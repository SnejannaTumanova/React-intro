import React, { useState } from "react";

function Img(props) {
  const [property, setProperty] = useState({
    parag: "This image",
    userData: "",
  });

  const nameAlt = "nothing";

  function imageClick() {
    setProperty((prevProperty) => ({
      ...prevProperty,
      parag: "This any image",
    }));
  }

  return (
    <div className="imgDiv">
      <p>{property.parag}</p>
      <img className="img" src={props.src} alt={nameAlt} onClick={imageClick} />
      <p>{property.userData}</p>
      <input
        placeholder="Help text"
        onChange={(event) =>
          setProperty((prevProperty) => ({
            ...prevProperty,
            userData: event.target.value,
          }))
        }
      ></input>
    </div>
  );
}

export default Img;
