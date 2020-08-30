import React from "react";
import Hero from "./Hero";
import DreamTeam from "./DreamTeam";
import style from "../css_modules/main.module.css";
import {base_url, items, version} from "../utils/Constants";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            opening_crawl: ''
        };
    }

    componentDidMount() {
        let text = sessionStorage.getItem('opening_crawl');
        if (text) {
            this.setState({opening_crawl: text});
        } else {
            let episode = Math.floor(Math.random() * 6) + 1;
            fetch(`${base_url+version}/films/${episode}`)
                .then(response => response.json())
                .then(data => {
                    this.setState({
                        opening_crawl: data.opening_crawl
                    });
                    sessionStorage.setItem('opening_crawl', data.opening_crawl);
                })
        }
        let heroId = this.props.match.params.id;
        if (!Object.keys(items).includes(heroId)) {
            heroId = 'luke'
        }
        this.props.changeHero(heroId);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.id !== prevProps.match.params.id)  {
            let heroId = this.props.match.params.id;
            if (!Object.keys(items).includes(heroId)) {
                heroId = 'luke'
            }
            this.props.changeHero(heroId)
        }
    }

    componentWillUnmount() {
        console.log('Home will unmount');
    }

    render() {
        let heroId = this.props.match.params.id;
        if (!Object.keys(items).includes(heroId)) {
            heroId = 'luke'
        }
        return (
            <main className="clearfix mt-1">
                <Hero hero={heroId}/>
                <DreamTeam hero={heroId}/>
                <p className={style.farGalaxy}>{this.state.opening_crawl}</p>
            </main>
        );
    }
}

export default Home;