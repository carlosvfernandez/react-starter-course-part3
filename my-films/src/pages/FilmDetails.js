import React from 'react'
import axios from 'axios';
import Featured from '../components/Featured';
import Cast from '../components/Cast'
class FilmDetails extends React.Component {

    state = {
        film: "",
        cast: ""
    }

    componentDidMount() {
        const { filmId } = this.props.match.params
        this.getFilmDetails(filmId)
        this.getCredits(filmId)
    }

    getCredits = async filmId => {
        try {
            const result = await axios.get(`https://api.themoviedb.org/3/movie/${filmId}/credits?api_key=9050064b1204f4bdd570847ca389d7a1`);
            this.setState({
                cast: result.data.cast
            })
        } catch (error) {
            console.log(error)
        }
    }

    getFilmDetails = async (filmId) => {
        try {
            const result = await axios.get(`https://api.themoviedb.org/3/movie/${filmId}?api_key=9050064b1204f4bdd570847ca389d7a1`);
            this.setState({
                film: result.data
            })
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <div>
                <Featured film={this.state.film}></Featured>
                <Cast cast={this.state.cast}></Cast>
            </div>
        )
    }
}

export default FilmDetails;