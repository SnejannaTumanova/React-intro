import React, { useState } from "react";

function AddUser({ users, id, setUsers }) {
  const initialStateUser = {
    id: users.length + 1,
    firstName: "",
    lastName: "",
    age: 1,
    isHappy: false,
  };
  const [newUser, setNewUser] = useState(initialStateUser);

  const handleEditUser = (id) => {
    setUsers((prevUsers) => {
      return prevUsers.map((user) => {
        if (user.id === id) {
          // Возвращаем обновлённого пользователя с новыми данными, кроме id
          return { ...user, ...newUser, id: user.id };
        } else {
          // Возвращаем неизменённого пользователя
          return user;
        }
      });
    });
  };

  const handleAddUser = () => {
    setUsers((prevUsers) => [
      ...prevUsers,
      { ...newUser, id: users.length + 1 },
    ]);
  };

  const handleResetForm = () => {
    setNewUser(initialStateUser);
  };

  return (
    <form className="formUs">
      <input
        placeholder="Firstname"
        onChange={(event) =>
          setNewUser((prevState) => ({
            ...prevState,
            firstName: event.target.value,
          }))
        }
      />
      <input
        placeholder="Lastname"
        onChange={(event) =>
          setNewUser((prevState) => ({
            ...prevState,
            lastName: event.target.value,
          }))
        }
      />
      <input
        placeholder="Age"
        onChange={(event) =>
          setNewUser((prevState) => ({
            ...prevState,
            age: event.target.value,
          }))
        }
      />
      <label htmlFor="isHappy">Is happy?</label>
      <input
        type="checkbox"
        id="isHappy"
        checked={newUser.isHappy}
        onChange={(event) =>
          setNewUser((prevState) => ({
            ...prevState,
            isHappy: event.target.checked,
          }))
        }
      />
      <button
        type="button"
        onClick={() => {
          handleResetForm();
          id ? handleEditUser(id) : handleAddUser();
        }}
      >
        Send
      </button>
    </form>
  );
}

export default AddUser;
