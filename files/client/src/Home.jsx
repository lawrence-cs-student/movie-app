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
                    <svg onClick={HandleClick} xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="white" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.612 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3l-1.4 1.4ZM9.5 14q1.875 0 3.188-1.313T14 9.5q0-1.875-1.313-3.188T9.5 5Q7.625 5 6.312 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14Z"/></svg>
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
