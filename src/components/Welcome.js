import React, {Component} from "react";
import "./style.css";


const Welcome=(props)=>{
    return(
        <div>
        <h2>{props.name}</h2>
        <h4>{props.services}</h4>
        </div>
    )
};



export default Welcome;