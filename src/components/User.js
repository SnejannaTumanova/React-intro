import React from "react";

class User extends React.Component {
  user = this.props.user;

  render() {
    return (
      <div>
        <div>
          <h3>
            {this.user.firstName} {this.user.lastName}
          </h3>
          <p>{this.user.isHappy ? "Happy :)" : "Unhappy"}</p>
        </div>
      </div>
    );
  }
}

export default User;
