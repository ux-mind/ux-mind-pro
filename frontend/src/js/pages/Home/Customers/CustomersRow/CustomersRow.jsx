import React from 'react';

import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

const hashRow = [
	{ id: 0, content: '#quick_communication' },
	{ id: 1, content: '#best_experince' },
	{ id: 2, content: '#creative' },
	{ id: 3, content: '#fast' },
	{ id: 4, content: '#quality' },
	{ id: 5, content: '#professionally' },
	{ id: 6, content: '#high_conversion' },
	{ id: 7, content: '#trends' }
];

function CustomersRow() {
	const isUltraWide = useMediaQuery({
		query: `(min-width: 1920px)`
	});

	return (
		<div className="customers-row">
			<motion.div
				className="customers-line"
				animate={{
					translateX: ['-100%', '0%']
				}}
				transition={{
					duration: 10,
					ease: 'linear',
					repeat: Infinity
				}}
			>
				{hashRow.map(({ id, content }) => (
					<div className="customers-line__item" key={id}>
						{content}
					</div>
				))}
			</motion.div>
			<motion.div
				className="customers-line"
				animate={{
					translateX: ['-100%', '0%']
				}}
				transition={{
					duration: 10,
					ease: 'linear',
					repeat: Infinity
				}}
			>
				{hashRow.map(({ id, content }) => (
					<div className="customers-line__item" key={id}>
						{content}
					</div>
				))}
			</motion.div>
			<motion.div
				className="customers-line"
				animate={{
					translateX: ['-100%', '0%']
				}}
				transition={{
					duration: 10,
					ease: 'linear',
					repeat: Infinity
				}}
			>
				{hashRow.map(({ id, content }) => (
					<div className="customers-line__item" key={id}>
						{content}
					</div>
				))}
			</motion.div>
		</div>
	);
}

export default CustomersRow;
