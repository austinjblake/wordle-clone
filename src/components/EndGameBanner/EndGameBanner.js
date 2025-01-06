import React from 'react';

function EndGameBanner({ won, currentGuess, answer }) {
	if (won) {
		return (
			<div className='happy banner'>
				<p>
					<strong>Congratulations!</strong> Got it in
					<strong>
						{currentGuess} guess{currentGuess > 1 && 'es'}
					</strong>
					.
				</p>
			</div>
		);
	} else {
		return (
			<div className='sad banner'>
				<p>
					Sorry, the correct answer is <strong>{answer}</strong>.
				</p>
			</div>
		);
	}
}

export default EndGameBanner;
