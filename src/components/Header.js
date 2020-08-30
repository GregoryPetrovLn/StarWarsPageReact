import React from "react";
import Navigation from "./Navigation";
import {items} from "../utils/Constants";

const Header = (props) => {
    return(
        <header className="py-3 row align-items-center">
            <Navigation hero={props.hero}/>
            <h1 className="text-center py-4 col-6 offset-3">{items[props.hero].name}</h1>
        </header>
    );
};

export default Header;
