import React, { useState, useEffect, useRef } from 'react';
import Button from './Button';




function Jock() {

    const [joke, setJoke] = useState("");
    const jokeRef = useRef();

    const fetchJoke = async () => {
        try {
            const response = await fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single");
            const data = await response.json();
            setJoke(data.joke);
        } catch (error) {
            console.error("Error fetching the joke:", error);
            setJoke("Failed to fetch joke.");
        }
    };

    const copyJoke = () => {
        const jokeText = jokeRef.current.select();
        navigator.clipboard.writeText(jokeText)

    };

    useEffect(() => {
        fetchJoke();
    }, []);

    return (
        <div>
            <Button callapi={fetchJoke} />
            <h3 ref={jokeRef}>{joke}</h3>
            <button onClick={copyJoke} >Copy joke</button>
        </div>
    );
}

export default Jock;
