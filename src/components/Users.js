import React from "react";
import User from "./User";

function Users(props) {
  return (
    <div>
      {props.users.map((el) => (
        <User onDelete={() => deleteUser(el.id)} key={el.id} user={el} />
      ))}
    </div>
  );

  function deleteUser(id) {
    props.setUsers(props.users.filter((user) => user.id !== id));
  }
}

export default Users;
