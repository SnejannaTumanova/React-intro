import React from "react";
import User from "./User";

//Создание компонента внутри файла JS через класс
class Users extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.users.map((el) => (
          <User onDelete={() => this.deleteUser(el.id)} key={el.id} user={el} />
        ))}
      </div>
    );
  }
  deleteUser(id) {
    this.props.setUsers(this.props.users.filter((user) => user.id !== id));
  }
}

export default Users;
