import React from "react";
import Home from "./Home";
import AboutMe from "./AboutMe";
import StarWars from "./StarWars";
import Contact from "./Contact";
import {Route, Switch} from "react-router-dom";

class Main extends React.Component {

    render() {
        return (
            <Switch>
                <Route path={['/', '/home', '/home/:id']} exact render={(props) => (<Home {...props} changeHero={this.props.changeHero}/>)}/>
                <Route path={['/about_me', '/about_me/:id']} exact render={(props) => (<AboutMe {...props} changeHero={this.props.changeHero}/>)}/>
                <Route path='/star_wars' component={StarWars}/>
                <Route path='/contact' component={Contact}/>
                <Route component={Home}/>
            </Switch>
        )
    }


}

export default Main;