import React from 'react';
import AppendHead from 'react-append-head';

import bold from '../../assets/fonts/Trap-Bold.woff';
import bold2 from '../../assets/fonts/Trap-Bold.woff2';
import light from '../../assets/fonts/Trap-Light.woff';
import light2 from '../../assets/fonts/Trap-Light.woff2';
import medium from '../../assets/fonts/Trap-Medium.woff';
import medium2 from '../../assets/fonts/Trap-Medium.woff2';
import regular from '../../assets/fonts/Trap-Regular.woff';
import regular2 from '../../assets/fonts/Trap-Regular.woff2';
import semiBold from '../../assets/fonts/Trap-SemiBold.woff';
import semiBold2 from '../../assets/fonts/Trap-SemiBold.woff2';

const fontsArr = [
	bold,
	bold2,
	light,
	light2,
	medium,
	medium2,
	regular,
	regular2,
	semiBold,
	semiBold2
];

const Head = () => {
	return (
		<AppendHead>
			{fontsArr.map((font) => (
				<link
					rel="preload"
					href={font}
					as="font"
					type="font/woff2"
					crossorigin
					key={font}
				/>
			))}
		</AppendHead>
	);
};

export default Head;
