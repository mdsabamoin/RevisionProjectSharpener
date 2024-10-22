import React, {useState} from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [userDetails , setUserDetails] = useState([]);
  const UserHandler = (uname,uage)=>{
    setUserDetails((previousState)=>{
      return [...previousState ,{name:uname,age:uage,id:Math.random().toString()}];
    })
  }
  return (
    <div>
      <AddUser onAddUser={UserHandler}/>
      <UsersList users={userDetails} />
    </div>
  );
}

export default App;
