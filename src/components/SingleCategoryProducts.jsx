import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import Loader from "./loader/Loader";

// eslint-disable-next-line react/prop-types
const SingleCategoryProducts = ({ category }) => {
	const [categoryProducts, setCategoryProducts] = useState([]);
	useEffect(() => {
		fetch(`https://fakestoreapi.com/products/category/${category}`)
			.then((res) => res.json())
			.then((data) => {
				setCategoryProducts(data);
			});
	}, [category]);

	return (
		<ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
			{categoryProducts.length ? (  
				categoryProducts.map((product, idx) => (
					<ProductCard product={product} key={product.id + idx} />
				))
			) : (
				<Loader />
			)}
		</ScrollMenu>
	);
};

export default SingleCategoryProducts;

function LeftArrow() {
	const { isFirstItemVisible, scrollPrev } =
		React.useContext(VisibilityContext);

	return (
		<span
			disabled={isFirstItemVisible}
			onClick={() => scrollPrev()}
			className='left-arrow'
		>
			<i className='bi bi-arrow-left-circle-fill' />
		</span>
	);
}

function RightArrow() {
	const { isFirstItemVisible, scrollNext } =
		React.useContext(VisibilityContext);

	return (
		<span
			disabled={isFirstItemVisible}
			onClick={() => scrollNext()}
			className='right-arrow'
		>
			<i className='bi bi-arrow-right-circle-fill' />
		</span>
	);
}
