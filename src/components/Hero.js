import React from "react";
import {items} from "../utils/Constants";

const Hero = (props) => {
    return (
        <section className="mr-1 float-left w-25 row">
            <img className="col-12" src={require(`../Images/friend${items[props.hero].index}.jpg`)} alt="Hero"/>
        </section>
    );
};

export default Hero;

// [пропс херо] это ключ объекта