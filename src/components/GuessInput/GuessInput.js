import React from 'react';

function GuessInput({ guess, setGuess, submitGuess }) {
	return (
		<form className='guess-input-wrapper' onSubmit={submitGuess}>
			<label htmlFor='guess-input'>Enter guess:</label>
			<input
				id='guess-input'
				value={guess}
				onChange={(e) => setGuess(e.target.value.toUpperCase())}
				maxLength={5}
				pattern='[A-Z]{5,5}'
			/>
		</form>
	);
}

export default GuessInput;
