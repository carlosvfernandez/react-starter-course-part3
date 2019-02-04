import React from 'react'
import axios from 'axios'
import Featured from '../components/Featured'
import Premieres from '../components/Premieres'
import SectionTitle from '../components/SectionTitle'
import {connect} from 'react-redux'


class HomePage extends React.Component {
    state = {
        films: [],
        featuredFilm: "",
        nextPremieres: []
    }

    componentDidMount() {
        this.getData();
        this.getNextPremieres();
        console.log(this.props.test.test);
    }

    getNextPremieres = async () => {
        try {
            const results = await axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=9050064b1204f4bdd570847ca389d7a1');
            this.setState({
                nextPremieres: results.data.results
            });
        } catch (error) {
            console.log(error);
        }
    }

    getData = async () => {
        try {
            const results = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=9050064b1204f4bdd570847ca389d7a1');
            this.setFeaturedFilm(results.data.results);
            this.setState({
                films: results.data.results
            });
        } catch (error) {
            console.log(error);
        }
    }

    setFeaturedFilm(films) {
        const featuredFilm = films[Math.floor(Math.random() * films.length)];
        this.setState({
            featuredFilm
        })

    }

    render() {
        return (
            <div>
                <Featured film={this.state.featuredFilm} ></Featured>
                <SectionTitle>Premieres:</SectionTitle>
                <Premieres films={this.state.films}></Premieres>
                <SectionTitle>Next premieres:</SectionTitle>
                <Premieres films={this.state.nextPremieres}></Premieres>
            </div>
        )
    }
}
function mapStateToProps({test}){
    return {
        test
    }
}

export default connect(mapStateToProps)(HomePage);