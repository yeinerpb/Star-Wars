import React, { useState, useEffect } from "react";
import axios from "axios";

function Films() {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        const fetchFilms = async () => {
            try {
                const response = await axios.get("https://swapi.dev/api/films/");
                if (Array.isArray(response.data.results)) {
                    setFilms(response.data.results);
                } else {
                    console.error("Response data is not an array:", response.data);
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchFilms();
    }, []);

    return (
        <div>
            <h1>Films</h1>
            {films.map((film, index) => (
                <div key={index}>
                    <h3>{film.title}</h3>
                    <p>{film.opening_crawl}</p>
                    <h2>{film.director}</h2>
                    <p>{film.release_date}</p>
                    <p>{film.description}</p>
                    <button
                        onClick={() => (window.location.href = `https://www.imdb.com/title/${film.imdb_id}`)}
                        className="btn btn-primary"
                    >
                        Ver en IMDB
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Films;
