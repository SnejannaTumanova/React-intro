import React, { useState } from "react";
import Header from "./Header";
import Img from "./Img";
import Users from "./Users";
import AddUser from "./AddUser";

function App() {
  const [users, setUsers] = useState([
    { id: 1, firstName: "Bob", lastName: "Marley", age: 40, isHappy: true },
    { id: 2, firstName: "John", lastName: "Doe", age: 22, isHappy: false },
  ]);

  console.log("users", users);
  return (
    <div className="name">
      <main>
        <Header />
        <div className="imgDivApp">
          <Img src="https://trikky.ru/wp-content/blogs.dir/1/files/2023/03/23/zyro-image-11.jpg" />
          <Img src="https://img.freepik.com/free-photo/beautiful-kitten-with-colorful-clouds_23-2150752964.jpg" />
        </div>
      </main>
      <aside>
        <AddUser users={users} setUsers={setUsers} />
        <Users users={users} setUsers={setUsers} />
      </aside>
    </div>
  );
}

export default App;
