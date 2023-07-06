import { Container } from "react-bootstrap";
import SubTitle from "./SubTitle";
import SingleCategoryProducts from "./SingleCategoryProducts";

const SingleCategory = ({ category }) => {
	return (
		<Container className='single-category py-5 position-relative' id={category}>
			<SubTitle title={category} />
			<SingleCategoryProducts category={category} />
		</Container>
	);
};

export default SingleCategory;
