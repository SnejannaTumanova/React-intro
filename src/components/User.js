import React, { useState } from "react";
import AddUser from "./AddUser";

function User({ user, users, setUsers, onDelete }) {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="user">
      <div>
        <h3>
          {user.firstName} {user.lastName}
          <p>{user.isHappy ? "Happy :)" : "Unhappy"}</p>
        </h3>
      </div>
      {isEdit && <AddUser id={user.id} setUsers={setUsers} users={users} />}
      <div>
        {" "}
        <img
          src="https://cdn-icons-png.flaticon.com/512/6048/6048190.png"
          alt="deleteImage"
          className="icons"
          onClick={onDelete}
        ></img>
        <img
          src="https://cdn-icons-png.freepik.com/512/8256/8256355.png"
          alt="editingImage"
          className="icons"
          onClick={() => {
            setIsEdit(() => !isEdit);
          }}
        ></img>
      </div>
    </div>
  );
}

export default User;
