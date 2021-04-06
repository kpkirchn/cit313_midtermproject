import React from 'react';
import Wrapper from "./Wrapper";
import {NavLink} from "react-router-dom";


function Box(props){


    const boxStyle={
        minHeight: "100px",
        maxWidth: "200px",
        backgroundColor: "#0e0e48",
        justifyContent: "center",
        color: "white",
        display: "inline-flex",
        paddingBottom: "10px",
        flexWrap: "wrap",
        margin: "50px",
        textAlign: "center",

    }



    return(
        <div style={boxStyle} className="mainScreen">
            <img src={props.dt.img} alt={props.dt.alt} width="100%" height="100%" />
            <h3>Name: {props.dt.name}</h3>
            <h3>Category: {props.dt.category}</h3>
            <h3>Value: {props.dt.value}</h3>
        </div>
    )


}

export default Box;
