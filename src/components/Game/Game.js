import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessList from '../GuessList';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	const [guess, setGuess] = useState('');
	const [guessList, setGuessList] = useState([]);
	function submitGuess(e) {
		e.preventDefault();
		console.log(guess);
		const newGuess = { word: guess, id: crypto.randomUUID() };
		setGuessList([...guessList, newGuess]);
		setGuess('');
	}
	return (
		<>
			<GuessList guessList={guessList} />
			<GuessInput guess={guess} setGuess={setGuess} submitGuess={submitGuess} />
		</>
	);
}

export default Game;
