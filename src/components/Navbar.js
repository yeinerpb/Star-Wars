import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/characters">Characters</Link>
                </li>
                <li>
                    <Link to="/films">Films</Link>
                </li>
                <li>
                    <Link to="/planets">Planets</Link>
                </li>
                <li>
                    <Link to="/spaceships">Spaceships</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
