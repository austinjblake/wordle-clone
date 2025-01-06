import React, { use, useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessList from '../GuessList';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants.js';
import { checkGuess } from '../../game-helpers.js';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	const [guess, setGuess] = useState('');
	const [guessList, setGuessList] = useState(() => {
		const guessAttempts = new Array(NUM_OF_GUESSES_ALLOWED).fill();
		guessAttempts.forEach((attempt, i) => {
			guessAttempts[i] = { word: '', id: crypto.randomUUID(), status: null };
		});
		return guessAttempts;
	});
	const [currentGuess, setCurrentGuess] = useState(0);

	function submitGuess(e) {
		e.preventDefault();
		if (currentGuess >= NUM_OF_GUESSES_ALLOWED) {
			return;
		}
		const guessStatus = checkGuess(guess, answer);
		const newGuess = {
			word: guess,
			id: crypto.randomUUID(),
			status: guessStatus,
		};
		const newGuessList = [...guessList];
		newGuessList[currentGuess] = newGuess;
		setGuessList(newGuessList);
		setCurrentGuess(currentGuess + 1);
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
