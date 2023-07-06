const SubTitle = ({ title }) => {
	return (
		<h3 className='mb-5 mt-3 text-uppercase'>
			<span className='text-primary'>____ </span>
			{title}
			<span className='text-primary'> ____</span>
		</h3>
	);
};

export default SubTitle;
