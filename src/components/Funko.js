import React from 'react';
import {NavLink} from "react-router-dom";
import Wrapper from "./Wrapper";

function Funko(props) {
    const data = [
        {
            id: 0
        },
        {
            name: "Goku",
            category: "animation",
            value: 1,
            img: "https://images-na.ssl-images-amazon.com/images/I/51KJqhhcMZL._AC_SL1076_.jpg",
            id: 1
        },
        {
            name: "Vegeta",
            category: "animation",
            value: 2,
            img: "https://images-na.ssl-images-amazon.com/images/I/514OOd8O5hL._AC_SX425_.jpg",
            id: 2
        },
        {
            name: "Vegito",
            category: "animation",
            value: 5,
            img: "https://i5.walmartimages.com/asr/9d0d9ea9-279c-49c9-b263-ecc42d8a30c7_1.9e55add9a48eb687cadb0527a27ad48f.jpeg",
            id: 3
        },
        {
            name: "Deku",
            category: "animation",
            value: 2,
            img: "https://images-na.ssl-images-amazon.com/images/I/51IZqW3L05L._AC_SX425_.jpg",
            id: 4
        },
        {
            name: "Kazuya",
            category: "games",
            value: 3,
            img: "https://cdn.shopify.com/s/files/1/0803/3763/products/Tekken_kazuya_POP-mindzai-1000-2.jpg?v=1571567721",
            id: 5
        },
        {
            name: "Cortex",
            category: "games",
            value: 2,
            img: "https://www.characterstation.com/eshop/13567-large_default/figur-funko-pop-games-crash-bandicoot-neo-cortex-rare-geneva-switzerland-online-shop.jpg",
            id: 6
        },
        {
            name: "Sonic",
            category: "games",
            value: 4,
            img: "https://images-na.ssl-images-amazon.com/images/I/41x7KV15nsL._AC_SY450_.jpg",
            id: 7
        },
        {
            name: "McCree",
            category: "games",
            value: 3,
            img: "https://geekvault.co.uk/wp-content/uploads/2019/07/Overwatch_FPV_USAMcCree01.jpg",
            id: 8
        },
        {
            name: "Michael Scott",
            category: "television",
            value: 3,
            img: "https://media.gamestop.com/i/gamestop/10173271/POP-Television-The-Office-Michael-Scott?$pdp$",
            id: 9
        },
        {
            name: "Dwight",
            category: "television",
            value: 1,
            img: "https://images-na.ssl-images-amazon.com/images/I/518oRvfXItL._AC_SX425_.jpg",
            id: 10
        },
        {
            name: "Jim",
            category: "television",
            value: 2,
            img: "https://images-na.ssl-images-amazon.com/images/I/41vdN0vxvrL._AC_.jpg",
            id: 11
        },
        {
            name: "Pam",
            category: "television",
            value: 1,
            img: "https://images-na.ssl-images-amazon.com/images/I/31R5tyCdCnL._AC_.jpg",
            id: 12
        }
    ]

    let id = props.match.params.id;
    let name = data[id].name;
    let category = data[id].category;
    let value = data[id].value;
    let image = data[id]. img;


    const boxStyle = {
        minHeight: "150px",
        maxWidth: "200px",
        backgroundColor: "#0e0e48",
        justifyItems: "center",
        color: "white",
        display: "inline-flex",
        paddingBottom: "10px",
        flexWrap: "wrap",
        margin: "50px",

    }

    const Navigation = {
        display: "flex",
        flexDirection: "row",
        position: "absolute",
        top: 0,
        left: 0,
        color: "black",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",

    }


    return (
        <div style={boxStyle}>
            <NavLink to={"/"} style={Navigation}>Back</NavLink>
            <img src={image} alt={name} width="100%" height="100%" />
            <h3>Name: {name}</h3>
            <h3>Category: {category}</h3>
            <h3>Value: {value}</h3>
        </div>
    )
}


export default Funko;