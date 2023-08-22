import React, {useState} from "react";
import {Link} from "react-router-dom";

export default function Home(props) {

    const [userInput, setUserInput] = useState("");

    function HandleClick (event) {
        event.preventDefault();
        props.function(event, userInput);
        console.log(userInput);
        console.log(props.movies)
    }

    function HandleEnter (event) {
        if (event.key === "Enter") {
            event.preventDefault()
            HandleClick(event);
        }
    }

    return (
        <div id="main">
            <div className="search">
                <form>
                    <input 
                        type="text" 
                        placeholder="Search a Movie" 
                        name="title" 
                        onChange= {(event) => {setUserInput(event.target.value)}}
                        onKeyDown = {HandleEnter}>
                    </input>
                    <svg onClick= {HandleClick} xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 48 48"><mask id="ipSSearch0"><g fill="none" stroke-linejoin="round" stroke-width="4"><path fill="#fff" stroke="#fff" d="M21 38c9.389 0 17-7.611 17-17S30.389 4 21 4S4 11.611 4 21s7.611 17 17 17Z"/><path stroke="#000" stroke-linecap="round" d="M26.657 14.343A7.975 7.975 0 0 0 21 12a7.975 7.975 0 0 0-5.657 2.343"/><path stroke="#fff" stroke-linecap="round" d="m33.222 33.222l8.485 8.485"/></g></mask><path fill="#825b23" d="M0 0h48v48H0z" mask="url(#ipSSearch0)"/></svg>
                </form>
            </div>
            <div className="results">
                {props.movies.results.map((object, index) => (
                    <Link key={object.id} to={`/movie/${object.id}`} className="link-style">
                        <div className="card" >
                            <div>
                                <img src={`https://image.tmdb.org/t/p/w500${object.poster_path}`} alt="not available"></img>
                            </div>
                            <h1>{object.title}</h1>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};
