import React from "react";
import style from '../css_modules/friend.module.css';
import {Link} from "react-router-dom";
import {items} from "../utils/Constants";

const Friend = (props) => {
    let friend;
    switch (props.index) {
        case 6:
            friend = (<img
                className={`col-4 p-1 ${style.bottomLeft}`}
                src={require(`../Images/friend${items[props.friend].index}.jpg`)}
                alt=''
                />);
            break;
        case 8:
            friend = (<img
                className={`col-4 p-1 ${style.bottomRight}`}
                src={require(`../Images/friend${items[props.friend].index}.jpg`)}
                alt=''
            />);
            break;
        default:
            friend = (<img
                className='col-4 p-1'
                src={require(`../Images/friend${items[props.friend].index}.jpg`)}
                alt=''
            />);
    }
    return <Link to={`/home/${props.friend}`}>{friend}</Link>;

};

export default Friend;