import React from "react";
import Card from "./card";
import "./ErrorModal.css";
import Button from "./Button"
const ErrorModal = (props) =>{
 return(
   <div>
   <div className="backdrop" onClick={props.onConfirm}></div>
   <Card className="modal">
    <header className="header">
       <div>{props.title}</div>
    </header>
    <div className="content">
      <p>{props.message}</p>
    </div>
    <footer className="actions">
      <Button onClick={props.onConfirm}>Okay</Button>
    </footer>  
 </Card>
</div>)
}

export default ErrorModal;