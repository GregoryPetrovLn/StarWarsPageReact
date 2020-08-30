export const base_url = 'http://sw-info-api.herokuapp.com';
export const version = '/v1';
export const periodWeek = 1000 * 60 * 60 * 24 * 7;
export const periodMonth = 1000 * 60 * 60 * 24 * 30;
export const starsWarsInfo =  `Star Wars is an American epic space-opera media franchise created by George Lucas, which began with
    the eponymous 1977 film and quickly became a worldwide pop-culture phenomenon. The franchise has
been expanded into various films and other media, including television series, video games, novels,
    comic books, theme park attractions and themed areas, comprising an all-encompassing fictional
universe. The franchise holds a Guinness World Records title for the "Most successful film
merchandising franchise."[1] In 2018, the total value of the Star Wars franchise was estimated at
US$65 billion, and it is currently the fifth-highest-grossing media franchise of all time.

    The original film, later subtitled Episode IV – A New Hope, was followed by the sequels Episode V –
                    The Empire Strikes Back (1980) and Episode VI – Return of the Jedi (1983), forming the original Star
Wars trilogy. A prequel trilogy was later released, consisting of Episode I – The Phantom Menace
(1999), Episode II – Attack of the Clones (2002) and Episode III – Revenge of the Sith (2005). Ten
years later, a sequel trilogy began with Episode VII – The Force Awakens (2015), continued with
    Episode VIII – The Last Jedi (2017), and concluded with Episode IX – The Rise of Skywalker (2019).
    Together, the three trilogies form what has been referred to as the 'Skywalker saga'. The first
eight films were nominated for Academy Awards (with wins going to the first two released) and were
commercially successful. Together with the theatrical anthology films Rogue One (2016) and Solo: A
Star Wars Story (2018), the combined box office revenue of the films equates to over US$9
billion,[2] and is currently the second-highest-grossing film franchise.[3]

In 2012, Lucas sold his company to Disney, and in April 2014, most existing spin-off media was made
non-canon and rebranded as 'Star Wars Legends'. The episodic 'Skywalker saga' and The Clone Wars
film and TV series (2008–2014) define the canon, along with most subsequent works.`;
export const friends = ['Luke Skywalker', 'R2-D2', 'C-3PO', 'Wicket Wystri Warrick', 'Chewbacca', 'Han Solo', 'Leia Organa','Millennium Falcon', 'Obi-Wan Kenobi', 'Yoda'];

export const items = {
    luke: {
        index: 0,
        name: "Luke Skywalker",
        img: "../Images/friend0.jpg",
        url: `${base_url+version}/peoples/1`
    },
    c3po:{
        index: 2,
        name: "C-3PO",
        img: "../Images/friend2.jpg",
        url: `${base_url+version}/peoples/2`
    },
    r2d2:{
        index: 1,
        name: "R2-D2",
        img: "../Images/friend1.jpg",
        url: `${base_url+version}/peoples/3`
    },
    leia:{
        index: 6,
        name: "Leia Organa",
        img: "../Images/friend6.jpg",
        url: `${base_url+version}/peoples/5`
    },
    obi_wan:{
        index: 8,
        name: "Obi-Wan Kenobi",
        img: "../Images/friend8.jpg",
        url: `${base_url+version}/peoples/10`
    },
    chewbacca:{
        index: 4,
        name: "Chewbacca",
        img: "../Images/friend4.jpg",
        url: `${base_url+version}/peoples/13`
    },
    han_solo:{
        index: 5,
        name: "Han Solo",
        img: "../Images/friend5.jpg",
        url: `${base_url+version}/peoples/14`
    },
    yoda:{
        index: 9,
        name: "Yoda",
        img: "../Images/friend9.jpg",
        url: `${base_url+version}/peoples/0`
    },
    ewok:{
        index: 3,
        name: "Wicket Systri Warrick",
        img: "../Images/friend3.jpg",
        url: `${base_url+version}/peoples/30`
    },
    falcon:{
        index: 7,
        name: "Millennium Falcon",
        img: "../Images/friend7.jpg",
        url: `${base_url+version}/transports/10`
    }
};

