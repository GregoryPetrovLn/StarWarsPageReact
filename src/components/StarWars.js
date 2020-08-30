import React from "react";
import {starsWarsInfo} from "../utils/Constants";
import style from '../css_modules/main.module.css';

class StarWars extends React.Component{

    render() {
        return (
            <div className={`${style.farGalaxy}`}>
                <p>{starsWarsInfo}</p>
            </div>
        );
    }
}

export default StarWars;