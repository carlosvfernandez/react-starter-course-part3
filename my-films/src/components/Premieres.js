import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const urlBaseImage = 'https://image.tmdb.org/t/p/w154';

const Container = styled.div`
    >ul{
        background: rgba(66,165,245,1);
        padding-left: 0;
        overflow: scroll;
        display: flex;
        margin: 0;
        align-items: stretch;
    }
`

const ItemFilm = styled(Link)`
    list-style:none;
    display: inline-block;
    background: url(${props => urlBaseImage + props.film.poster_path}) no-repeat;
    background-size: cover;
    min-width: 200px;
    margin: 5px;
    height: 300px;
    font-family: 'Amatic SC', cursive;
    color: yellow;
    font-size: 22px;
    font-weight: bold;
    >span{
        display: none;
        background:  rgba(38,50,56,0.5);
    }
    &:hover{
        >span{
            display: block;
        }
    }
`

export default ({ films }) => (
    <Container>
        <ul>
            {
                films.map(film => (
                    <ItemFilm key={film.id} to={`/details/${film.id}`} film={film}>
                        <span>{film.title}</span>
                    </ItemFilm>
                ))
            }
        </ul>
    </Container>
)