import React from 'react';

function GuessList({ guessList }) {
	return (
		<div className='guess-results'>
			{guessList.map((guess) => (
				<p key={guess.id} className='guess'>
					{guess.word}
				</p>
			))}
		</div>
	);
}

export default GuessList;
