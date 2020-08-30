import React from 'react';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import {SWContext} from "./utils/SWContext";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hero: 'luke'
        }
    }

    changeHero = (id='luke') => {
        this.setState({hero: id});

    };

    render() {
        return (
            <div className="container-fluid">
                    <Header hero={this.state.hero}/>
                    <Main changeHero={this.changeHero}/>
                    <Footer/>
            </div>
        );
    }
}

export default App;
