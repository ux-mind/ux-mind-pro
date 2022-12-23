import project1 from '../../assets/images/project1.png';
import project1_2x from '../../assets/images/project1@2x.png';
import project2 from '../../assets/images/project2.png';
import project2_2x from '../../assets/images/project2@2x.png';
import project3 from '../../assets/images/project3.png';
import project3_2x from '../../assets/images/project3@2x.png';

const projects = [
	{
		id: 1,
		industry: 'Ecommerce',
		name: 'Headphone Store',
		content:
			'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.',
		img: {
			x1: project1,
			x2: project1_2x
		}
	},
	{
		id: 2,
		industry: 'Mobile App',
		name: 'Flight Booking',
		content:
			'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.',
		img: {
			x1: project2,
			x2: project2_2x
		}
	},
	{
		id: 3,
		industry: 'Web App',
		name: 'Crypto Exchange',
		content:
			'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.',
		img: {
			x1: project3,
			x2: project3_2x
		}
	}
];

export default projects;
