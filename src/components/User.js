import React from "react";

function User(props) {
  const user = props.user;

  return (
    <div className="user">
      <div>
        <h3>
          {user.firstName} {user.lastName}
          <p>{user.isHappy ? "Happy :)" : "Unhappy"}</p>
        </h3>
      </div>
      <div>
        {" "}
        <img
          src="https://cdn-icons-png.flaticon.com/512/6048/6048190.png"
          alt="deleteImage"
          className="icons"
          onClick={props.onDelete}
        ></img>
        <img
          src="https://cdn-icons-png.freepik.com/512/8256/8256355.png"
          alt="editingImage"
          className="icons"
        ></img>
      </div>
    </div>
  );
}

export default User;
