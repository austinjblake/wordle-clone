import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	const [guess, setGuess] = useState('');
	function submitGuess(e) {
		e.preventDefault();
		console.log(guess);
		setGuess('');
	}
	return (
		<>
			<GuessInput guess={guess} setGuess={setGuess} submitGuess={submitGuess} />
		</>
	);
}

export default Game;
