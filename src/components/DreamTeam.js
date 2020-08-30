import React from "react";
import Friend from "./Friend";
import {items} from "../utils/Constants";

const keys = Object.keys(items); // массив всех ключей объекта

const DreamTeam = (props) => {
    const friends = keys.filter(key => key !== props.hero);
    return (
        <section className="ml-1 float-right row w-50 border border-light rounded-bottom no-gutters">
            <h2 className="col-12 text-center">Dream team</h2>
            <div>
                {friends.map((item, index) => <Friend key={item} friend={item} index={index}/>)}
            </div>
        </section>
    );
};

export default DreamTeam;
