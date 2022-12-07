import React from 'react';
import AnimatedTitle from './AnimatedTitle/AnimatedTitle';
import TextBlock from '../TextBlock';
import AnimatedTextLine from './AnimatedTextLine/AnimatedTextLine';

const Hero = () => {
	return (
		<div className="hero">
			<AnimatedTitle />
			<div className="container">
				<div className="hero-text">
					<TextBlock size="s">
						<p>
							We build engaging user experience for early-stage startups by connecting
							the dots between users’ needs and the client’s business model.
						</p>
					</TextBlock>
				</div>
			</div>
			<AnimatedTextLine />
		</div>
	);
};

export default Hero;
