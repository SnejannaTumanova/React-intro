import React from "react";
import User from "./User";

function Users({ users, setUsers }) {
  return (
    <div>
      {users.map((el) => (
        <User
          onEdit={editingUser}
          onDelete={() => deleteUser(el.id)}
          key={el.id}
          user={el}
          setUsers={setUsers}
          users={users}
        />
      ))}
    </div>
  );

  function deleteUser(id) {
    setUsers(users.filter((user) => user.id !== id));
  }

  function editingUser(user) {
    console.log(user);
  }
}

export default Users;
