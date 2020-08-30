import React from "react";
import {SWContext} from "../utils/SWContext";
import {Link} from "react-router-dom";

class Navigation extends React.Component {
    render() {
        return (
            <nav className="fixed-top ml-5">
                <ul className="nav">
                    <li className="nav-item btn btn-danger mx-1">
                        <Link to={`/home/${this.props.hero}`}>Home</Link>
                    </li>
                    <li className="nav-item btn btn-danger mx-1">
                        <Link to={`/about_me/${this.props.hero}`}>About me</Link>
                    </li>
                    <li className="nav-item btn btn-danger mx-1">
                        <Link to='/star_wars'>Star Wars</Link>
                    </li>
                    <li className="nav-item btn btn-danger mx-1">
                        <Link to='/contact'>Contact</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navigation;