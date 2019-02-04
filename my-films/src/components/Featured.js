import React from 'react'
import styled from 'styled-components'

const urlBaseImage = 'https://image.tmdb.org/t/p/w780/';

const Start = styled.div`
    background: url(${props => urlBaseImage + props.film.backdrop_path}) no-repeat;
    background-size: cover;
    height: 700px;
    color: white;
    font-size: 22px;
    font-family: 'Anton', sans-serif;
`
const InfoFilm = styled.div`
    position: relative;
    color: rgba(205,220,57,1);
`
const InfoContentFilm = styled.div`
    position: absolute;
    top: 150px;
    left: 3%;
    background: rgba(38,50,56,0.5);
    padding: 10px;
`
const InfoTitleFilm = styled.h1`
    color: rgba(255,179,0,1);
    font-family: "Rock Salt", cursive;
`
const InfoFilmOverview = styled.p`
    font-size: 14px;
    max-width: 400px;
`
const VoteAverage = styled.span`
    color: rgba(100,221,23,1);
    font-family: "Cinzel", serif;
`

const Loading = styled.div`
    text-align: center;
    font-size: 22px;

`

export default ({ film }) => {
    if (film) {
        return (
            <div>
                <Start film={film}>
                    <InfoFilm>
                        <InfoContentFilm>
                            <InfoTitleFilm>{film.title}</InfoTitleFilm>
                            <InfoFilmOverview>{film.overview}</InfoFilmOverview>
                            <VoteAverage>{film.vote_average}/10</VoteAverage>
                        </InfoContentFilm>
                    </InfoFilm>
                </Start>
            </div>
        )
    } else {
        return (<Loading>Loading</Loading>)
    }
}