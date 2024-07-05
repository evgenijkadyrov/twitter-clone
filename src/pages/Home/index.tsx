import React from 'react';

import HomeImage from '@/assets/images/big-picture.png';

export const Home = () => (
	<section>
		<div>
			row
			<img src={HomeImage as string} alt="HomeImage" />
			<div>
				column
				<div>icon</div>
				<h1> Happening now</h1>
				<h3>Join Twitter Today</h3>
				<button type="button">Sign google</button>
				<button type="button">Sign email</button>
				<div>
					{' '}
					y singing up you agree to the Terms of Service and Privacy Policy, including Cookie Use.
				</div>
				<div>
					Already have an account?<span>Log in?</span>{' '}
				</div>
			</div>
		</div>
	</section>
);
