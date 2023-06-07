import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Planets() {
    const [planets, setPlanets] = useState([]);

    useEffect(() => {
        // Aquí realizas la llamada a la API para obtener los planetas de Star Wars
        const fetchPlanets = async () => {
            try {
                const response = await axios.get('https://swapi.dev/api/planets/');
                if (Array.isArray(response.data.results)) {
                    setPlanets(response.data.results);
                } else {
                    console.error('Response data is not an array:', response.data);
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchPlanets();
    }, []);

    return (
        <div>
            <h1>Planets</h1>
            {planets.map((planet) => (
                <div key={planet.name}>
                    <h3>{planet.name}</h3>
                    <p>{planet.climate}</p>
                    <p>{planet.terrain}</p>

                </div>
            ))}
        </div>
    );
}

export default Planets;
