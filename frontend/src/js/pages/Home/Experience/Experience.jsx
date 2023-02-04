import React from 'react';

const Experience = ({ experienceRef, experienceText }) => {
	return (
		<div className="experience" id="experience" ref={experienceRef}>
			<div className="experience-bg">
				<div className="experience-text">
					<div className="container">
						<div
							id="experience-text"
							className="experience-text__wrapper text_blue text_size-xl"
						>
							<p ref={experienceText}>
								UX Mind Creative Agency's team with&nbsp;
								<strong>7+&nbsp;years of experience</strong> in&nbsp;UX/UI
								web&nbsp;&&nbsp;mobile design, NFT projects and SAAs. <br />
								We create style.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Experience;
