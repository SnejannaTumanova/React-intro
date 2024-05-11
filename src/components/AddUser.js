import React  from "react";


class AddUser extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            id: 1,
            firstName: '', 
            lastName: '', 
            age: 1, 
            isHappy: false
        }
    }

    handleAddUser = () => {
        const newUser = {
            id: this.props.users.length + 1, // Автоматическое увеличение ID на основе длины массива
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            age: parseInt(this.state.age), // Убедитесь, что возраст — это число
            isHappy: this.state.isHappy
        };
        this.props.setUsers(prevUsers => [...prevUsers, newUser]); // Использование spread operator для добавления нового пользователя
    }

    render () {

    return (
      <form className="formUs">
        <input placeholder="Firstname" onChange={(el) => this.setState({firstName: el.target.value})}/>
        <input placeholder="Lastname" onChange={(el) => this.setState({lastName: el.target.value})}/>
        <input placeholder="Age" onChange={(el) => this.setState({age: el.target.value})}/>
        <label htmlFor="isHappy">Is happy?</label>
                <input type="checkbox" id="isHappy" checked={this.state.isHappy} onChange={(el) => this.setState({isHappy: el.target.checked})}/>
                        <button type="button" onClick={this.handleAddUser}>Send</button>

      </form>
    )
    }
  }

  export default AddUser