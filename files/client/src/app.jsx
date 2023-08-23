import React, {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import SelectedMovie from "./movies";

export default function App () {

    const [movies, setMovies] = useState({ results: [] });

    function handleSubmit (event, userData) {
        const input = {userData}
        console.log(input);
        event.preventDefault();  
        fetch("https://movie-app-server-ufsn.onrender.com/api", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(input)
        }).then(response => {
            if (response.ok) {
                console.log("sucess");
                return response.json();
            } else {
                alert("Error fetching the data from the server");
                throw new Error("Request failed with status: " + response.status);
            }
        }).then (fetchedData  => {
            setMovies(fetchedData);
        }).catch(error => {
            console.log('Fetch error:', error)
        })
    };

    return (
        <div id="container">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home set={setMovies} function={handleSubmit} movies={movies} />}></Route>
                    <Route path="/movie/:movieId" element={<SelectedMovie movies={movies} />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
