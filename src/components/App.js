import React, { useState } from "react";
import Header from "./Header";
import Img from "./Img";
import Users from "./Users";
import AddUser from "./AddUser";
import Button from "./Button";

function App() {
  const [users, setUsers] = useState([
    { id: 1, firstName: "Bob", lastName: "Marley", age: 40, isHappy: true },
    { id: 2, firstName: "John", lastName: "Doe", age: 22, isHappy: false },
  ]);
  return (
    <div className="name">
      <main>
        <Button />
        <Header />
        <Img src="https://yt3.googleusercontent.com/LW3jxNDVq-mvRoKiFS5Bd8G_yPa7IQHCt3F6i9N-UYDAlSZhaY4h968kvZqsGMg-QmKf_9Y3r5Q=s900-c-k-c0x00ffffff-no-rj" />
        <Img src="https://img.freepik.com/free-photo/beautiful-kitten-with-colorful-clouds_23-2150752964.jpg" />
      </main>
      <aside>
        <AddUser users={users} setUsers={setUsers} />
        <Users users={users} setUsers={setUsers} />
      </aside>
    </div>
  );
}

export default App;
