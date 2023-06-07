import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Spaceships() {
    const [spaceships, setSpaceships] = useState([]);

    useEffect(() => {
        // Aquí realizas la llamada a la API para obtener las naves espaciales de Star Wars
        const fetchSpaceships = async () => {
            try {
                const response = await axios.get('https://swapi.dev/api/starships/');
                if (Array.isArray(response.data.results)) {
                    setSpaceships(response.data.results);
                } else {
                    console.error('Response data is not an array:', response.data);
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchSpaceships();
    }, []);

    return (
        <div>
            <h1>Spaceships</h1>
            {spaceships.map((spaceship) => (
                <div key={spaceship.name}>
                    <h3>{spaceship.name}</h3>
                    <p>{spaceship.length}</p>
                </div>
            ))}
        </div>
    );
}

export default Spaceships;
