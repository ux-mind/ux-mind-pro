import React from 'react';
import AnimatedTitle from './AnimatedTitle/AnimatedTitle';
import TextBlock from '../../../components/TextBlock';
import AnimatedTextLine from '../../../components/AnimatedTextLine/AnimatedTextLine';

const Hero = ({ attributes }) => {
	return (
		<section className="hero">
			<AnimatedTitle attributes={attributes} />
			<div className="container">
				<div className="hero-text">
					<TextBlock size="s">
						<p>
							{attributes.top_banner_text}
						</p>
					</TextBlock>
				</div>
			</div>
			<AnimatedTextLine attributes={attributes} />
		</section>
	);
};

export default Hero;
