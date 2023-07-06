import { Container } from "react-bootstrap";
import Heading from "../components/Heading";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import pagination from "../utils/pagination";
import Pagination from "./../components/pagination/Pagination";
import Loader from "../components/loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../rtk_states/slices/productsSlice";

const Products = () => {
	const products = useSelector((state) => state.products);

	console.log(products);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchProducts());
	}, []);

	const [currentPage, setCurrentPage] = useState(1);

	const { pages, currentProducts } = pagination(products, currentPage);

	return (
		<Container className='pt-5'>
			<Heading head={"products"} body={"Our All Products"} />
			{products?.length ? (
				<div className='d-flex flex-wrap justify-content-center gap-4'>
					{currentProducts.map((product, idx) => (
						<ProductCard
							product={product}
							key={product.id + idx}
							cartBtn={"cart"}
						/>
					))}
				</div>
			) : (
				<Loader />
			)}

			<Pagination
				pages={pages}
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
			/>
		</Container>
	);
};

export default Products;
