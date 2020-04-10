import React from 'react';
import './Contact.css';
   
function Contact(props) {
    return (
    <div className="Contact">
         <img className="avatar" src={props.avatar} alt={props.name}/>
        <div>
            <h1 className="name">{props.name}</h1>
            <div className="status">
            <div className= {props.isOnline ? "status-online" : "status-offline"}>
            </div>
            <p className="status-text">{props.isOnline ? "online" : "offline"}</p>
            </div>
        </div>
    
    </div>
    )
}



export default Contact
