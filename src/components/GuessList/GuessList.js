import React from 'react';

function GuessList({ guessList }) {
	return (
		<div className='guess-results'>
			{guessList.map((guess, i) => (
				<p key={guess.id} className='guess'>
					<span className={`cell ${guess.status && guess.status[0].status}`}>
						{guess.word[0]}
					</span>
					<span className={`cell ${guess.status && guess.status[1].status}`}>
						{guess.word[1]}
					</span>
					<span className={`cell ${guess.status && guess.status[2].status}`}>
						{guess.word[2]}
					</span>
					<span className={`cell ${guess.status && guess.status[3].status}`}>
						{guess.word[3]}
					</span>
					<span className={`cell ${guess.status && guess.status[4].status}`}>
						{guess.word[4]}
					</span>
				</p>
			))}
		</div>
	);
}

export default GuessList;
