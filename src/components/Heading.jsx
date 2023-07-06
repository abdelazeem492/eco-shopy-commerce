/* eslint-disable react/prop-types */
const Heading = ({ head, body }) => {
	return (
		<div className='heading mb-5'>
			<p className='text-primary text-uppercase mb-0'>{head}</p>
			<h3 className='p-0'>{body}</h3>
		</div>
	);
};

export default Heading;
