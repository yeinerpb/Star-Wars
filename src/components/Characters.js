import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import Films from './Films';

function Characters() {
    const [characters, setCharacters] = useState([]);
    const [selectedCharacter, setSelectedCharacter] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const response = await axios.get('https://swapi.dev/api/people/');
                if (Array.isArray(response.data.results)) {
                    setCharacters(response.data.results);
                } else {
                    console.error('Response data is not an array:', response.data);
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchCharacters();
    }, []);

    function openModal(character) {
        setSelectedCharacter(character);
        setModalIsOpen(true);
    }

    function closeModal() {
        setSelectedCharacter(null);
        setModalIsOpen(false);
    }

    function extractCharacterId(url) {
        const regex = /\/(\d+)\/$/;
        const match = url.match(regex);
        if (match && match[1]) {
            return match[1];
        } else {
            return '';
        }
    }

    return (
        <div>
            <h1>Characters</h1>
            {characters.map((character) => (
                <div key={character.url}>
                    <h3>{character.name}</h3>
                    <img
                        src={`https://starwars-visualguide.com/assets/img/characters/${extractCharacterId(
                            character.url
                        )}.jpg`}
                        alt={character.name}
                        onClick={() => openModal(character)}
                    />
                    <p>{character.description}</p>
                </div>
            ))}
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
                {selectedCharacter && (
                    <div>
                        <h3>{selectedCharacter.name}</h3>
                        <h4>Altura: {selectedCharacter.height}</h4>
                        <h4>Masa: {selectedCharacter.mass}</h4>
                        <h4>Color del cabello: {selectedCharacter.hair_color}</h4>
                        <h4>Color de piel: {selectedCharacter.skin_color}</h4>
                        <h4>Color de ojos: {selectedCharacter.eye_color}</h4>
                        <h4>Año de nacimiento: {selectedCharacter.birth_year}</h4>
                        <h4>Genero: {selectedCharacter.gender}</h4>
                        <h4>Películas en las que participa:</h4>
                        <ul>
                            {selectedCharacter.films.map(url => (
                                <li key={url}>{url}</li>
                            ))}
                        </ul>
                    </div>
                )}
                <button onClick={closeModal}>Close</button>
            </Modal>
        </div>
    );
}

export default Characters;
