import React  from "react";
import User from "./User";
import { anyUser } from "./App";

//Создание компонента внутри файла JS через класс
class Users extends React.Component {
    constructor(props){
        super(props)
    }

    render () {
    return (
      <div >
        {this.props.users.map((el) =>(
            <User key={el.id} user={el} />
            ))}
      </div>
    )
    }
  }

  export default Users