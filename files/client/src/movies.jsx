import React from "react";
import {useParams} from "react-router-dom";

export default function SelectedMovie(props) {
    const movie1 = props.movies
    const { movieId } = useParams();
    const selectedMovie = movie1.results.find(movie => movie.id === parseInt(movieId));


    if (!selectedMovie) {
        return <h1>Movie Not Found...</h1>
    }

    return (
        <div className="movie-details">
            <div><img src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`}></img></div>
            <p>release date: </p>
            <p>{selectedMovie.release_date}</p>
            <p>ratings:</p>
            <p>{selectedMovie.vote_average}</p>
            <h1>{selectedMovie.title}</h1>
            <p>overview:</p>
            <p>{selectedMovie.overview}</p>
        </div>
    )
}