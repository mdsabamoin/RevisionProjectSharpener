import React from "react";
import Card from "./card";
import "./UsersList.css";
const UsersList = (props)=>{


    return (
      <Card className = "users">
        <ul>
        {props.users.map((user)=>{
        return(
          <li>`${user.name} (${user.age} years old)`</li>
          
        )
        })}
      </ul>
      </Card>
      
    )
  }
  export default UsersList;