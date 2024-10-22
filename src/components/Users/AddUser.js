import React,{useState} from "react";
import Card from "./card";
import Button from "./Button";
import "./AddUser.css";

const AddUser = () => {
  const [name , setName] = useState("");
  const [age , setAge] = useState("");
  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(name,age);
    // console.log(age);
    setName("");
    setAge("");
  };
const inputname = (event) =>{
  setName(event.target.value);
}
const inputage = (event) =>{
  setAge(event.target.value);
}
  return (
    <Card className="input">
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" value={name} onChange={inputname}/>
        <label htmlFor="age">Age</label>
        <input id="age" type="number"  value={age} onChange={inputage} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
