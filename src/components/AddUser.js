import React, { useState } from "react";

function AddUser(props) {
  const initialStateUser = {
    id: 1,
    firstName: "",
    lastName: "",
    age: 1,
    isHappy: false,
  };
  const [newUser, setNewUser] = useState(initialStateUser);

  const handleAddUser = () => {
    props.setUsers((prevUsers) => [
      ...prevUsers,
      { ...newUser, id: props.users.length + 1 },
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
          handleAddUser();
        }}
      >
        Send
      </button>
    </form>
  );
}

export default AddUser;
