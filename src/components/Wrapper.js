import React from 'react';
import {NavLink} from "react-router-dom";

function Wrapper(){

    const [data] = React.useState( [
        {
            name:"Goku",
            category:"animation",
            value:1,
            img: "https://images-na.ssl-images-amazon.com/images/I/51KJqhhcMZL._AC_SL1076_.jpg",
            id: 1
        },
        {
            name:"Vegeta",
            category:"animation",
            value:2,
            img: "https://images-na.ssl-images-amazon.com/images/I/514OOd8O5hL._AC_SX425_.jpg",
            id: 2
        },
        {
            name:"Vegito",
            category:"animation",
            value:5,
            img: "https://i5.walmartimages.com/asr/9d0d9ea9-279c-49c9-b263-ecc42d8a30c7_1.9e55add9a48eb687cadb0527a27ad48f.jpeg",
            id: 3
        },
        {
            name:"Deku",
            category:"animation",
            value:2,
            img: "https://images-na.ssl-images-amazon.com/images/I/51IZqW3L05L._AC_SX425_.jpg",
            id: 4
        },
        {
            name:"Kazuya",
            category:"games",
            value:3,
            img: "https://cdn.shopify.com/s/files/1/0803/3763/products/Tekken_kazuya_POP-mindzai-1000-2.jpg?v=1571567721",
            id: 5
        },
        {
            name:"Cortex",
            category:"games",
            value:2,
            img: "https://www.characterstation.com/eshop/13567-large_default/figur-funko-pop-games-crash-bandicoot-neo-cortex-rare-geneva-switzerland-online-shop.jpg",
            id: 6
        },
        {
            name:"Sonic",
            category:"games",
            value:4,
            img: "https://images-na.ssl-images-amazon.com/images/I/41x7KV15nsL._AC_SY450_.jpg",
            id: 7
        },
        {
            name:"McCree",
            category:"games",
            value:3,
            img: "https://geekvault.co.uk/wp-content/uploads/2019/07/Overwatch_FPV_USAMcCree01.jpg",
            id: 8
        },
        {
            name:"Michael Scott",
            category:"television",
            value:3,
            img: "https://media.gamestop.com/i/gamestop/10173271/POP-Television-The-Office-Michael-Scott?$pdp$",
            id: 9
        },
        {
            name:"Dwight",
            category:"television",
            value:1,
            img: "https://images-na.ssl-images-amazon.com/images/I/518oRvfXItL._AC_SX425_.jpg",
            id: 10
        },
        {
            name:"Jim",
            category:"television",
            value:2,
            img: "https://images-na.ssl-images-amazon.com/images/I/41vdN0vxvrL._AC_.jpg",
            id: 11
        },
        {
            name:"Pam",
            category:"television",
            value:1,
            img: "https://images-na.ssl-images-amazon.com/images/I/31R5tyCdCnL._AC_.jpg",
            id: 12
        }
    ]);

    const NavLinkStyling={
        position: "absolute",
        backgroundColor: "#0e0e48",
        color: "black",
        top: 0,
        height: "40px",
        width: "100%",
        display: "inline-flexbox",
        textAlign: "center",
        cursor: "cursor",


    };

    const Navigation = {
        display: "flex",
        flexDirection: "row",
        position: "absolute",
        top: 0,
        color: "white",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",

    }

    const Spacing = {
        margin: "10px"
    }
    const boxStyle={
        maxWidth: "200px",
        minHeight: "150px",
        backgroundColor: "#0e0e48",
        justifyItems: "center",
        color: "white",
        display: "inline-flex",
        paddingBottom: "10px",
        flexWrap: "wrap",
        margin: "50px",
        objectFit: "contain",


    }

    const [visual, setVisual]=React.useState(data);
    const [sort, setSort]=React.useState("none");

    React.useEffect(()=>{
        let newArray;

        if (sort === "games") {
            newArray = data.filter(function (it) {
                return it.category.includes("games");
            });}
        else if (sort === "television"){
            newArray = data.filter(function(it){
                return it.category.includes("television");
            });}
        else if (sort === "animation"){
            newArray = data.filter(function(it){
                return it.category.includes("animation");
            });}
        else{
            newArray = data;
        }
        setVisual(newArray);
    }, [data, sort]);



    let Funko = visual.map((dt, idx)=>
        <NavLink to={"/Wrapper/"+ dt.id} key={idx} >
            <button style={boxStyle}>
                <img src={dt.img} alt={dt.name} width="100%" height="100%" />
                <h3>Name: {dt.name}</h3>
                <h3>Category: {dt.category}</h3>
                <h3>Value: {dt.value}</h3>
            </button>
        </NavLink>
    );




    return(
        <div className="Wrapper" style={NavLinkStyling}>
            {Funko}
            <nav style={Navigation}>
                <button onClick={() => setSort("none")} style={Spacing}>All</button>
                <button onClick={() => setSort("games")} style={Spacing}>Games</button>
                <button onClick={() => setSort("television")} style={Spacing}>Television</button>
                <button onClick={() => setSort("animation")} style={Spacing}>Anime</button>
            </nav>
        </div>
    )
}


export default Wrapper;