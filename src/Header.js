import React from "react";
//import ReactDOM from "react-dom";

function Header(){
    return (        
        <header className="header">
            <img 
                src={require("./image/logo.png")} 
                className="header--image"
                alt=""
            />
            <h2 className="header--title">Meme Generator</h2>
        </header>
    )
}

export default Header