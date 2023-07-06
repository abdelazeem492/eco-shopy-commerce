/* eslint-disable react/prop-types */
const Categories = ({ categories }) => {
	return (
		<div
			className='d-flex justify-content-center align-items-center flex-wrap categories gap-3 mt-5 '
			id='categories'
		>
			{categories.map((category, idx) => (
				<a
					href={`#${category}`}
					key={idx}
					className='text-decoration-none text-primary'
				>
					<h4 className='border-primary'>{category}</h4>
				</a>
			))}
		</div>
	);
};
export default Categories;
