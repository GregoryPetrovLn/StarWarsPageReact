import React from "react";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="row align-items-center">
            <div className="btn btn-danger col-2 offset-2 h-50 text-center my-1">
                <Link path='/contact'>
                Send me an <span className="bold">email</span>
                </Link>
            </div>
        </footer>
    );
};

export default Footer;

