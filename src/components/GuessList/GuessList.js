import React from 'react';

function GuessList({ guessList }) {
	return (
		<div className='guess-results'>
			{guessList.map((guess, i) => (
				<p key={guess.id} className='guess'>
					<span className='cell'>{guess.word[0]}</span>
					<span className='cell'>{guess.word[1]}</span>
					<span className='cell'>{guess.word[2]}</span>
					<span className='cell'>{guess.word[3]}</span>
					<span className='cell'>{guess.word[4]}</span>
				</p>
			))}
		</div>
	);
}

export default GuessList;
