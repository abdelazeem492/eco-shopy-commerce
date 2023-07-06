import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Rating } from "../utils/Rating";
import Heading from "./../components/Heading";
import SingleCategory from "../components/SingleCategory";
import { useDispatch } from "react-redux";
import { addToCart } from "../rtk_states/slices/cartSlice";

const SingleProduct = () => {
	const { id } = useParams();

	const [product, setProduct] = useState({});
	useEffect(() => {
		fetch(`https://fakestoreapi.com/products/${id}`)
			.then((res) => res.json())
			.then((data) => {
				setProduct(data);
			});
	}, [id]);

	const numberOfFillStars = +product?.rating?.rate.toString().split(".")[0];
	const halfStar = +product?.rating?.rate.toString().split(".")[1];

	const dispatch = useDispatch();

	return (
		<Container className='pt-5'>
			<Row className='my-5 align-items-center gap-lg-5 gap-3 flex-lg-row flex-md-row flex-column '>
				<Col className='my-5 product-image '>
					<img src={product?.image} alt={product?.title} />
				</Col>
				<Col className='product-details my-5'>
					<p className='product-category text-secondary fw-medium mb-1'>
						{product?.category?.toUpperCase()}
					</p>
					<h4 className='product-title w-100'>{product?.title}</h4>
					<div className='rating d-flex gap-4 mt-3'>
						<div className='text-warning'>
							{Rating(numberOfFillStars, halfStar)}{" "}
							<span className='text-secondary'>({product?.rating?.rate})</span>
						</div>
						<p className='text-secondary ps-4 border-2 border-secondary-subtle border-start'>
							({product?.rating?.count}) Reviews
						</p>
					</div>
					<p className='product-desc lh-lg'>{product?.description}</p>
					<div className='border-2 border-secondary-subtle border-top pt-4 d-flex align-items-center justify-content-center flex-wrap gap-3'>
						<p className='product-price fs-3 mb-0 me-3 text-dark py-2 pe-4 border-2 border-end border-secondary-subtle'>
							$ {product?.price}
						</p>
						<div className='product-btns d-flex gap-3 flex-lg-row flex-md-column flex-sm-row '>
							<Button variant='primary' className='btn-md-md '>
								Buy it now <i className='bi bi-stripe'></i>
							</Button>
							<Button
								onClick={() => dispatch(addToCart(product))}
								variant='outline-primary'
								className='btn-md-md '
							>
								Add to cart <i className='bi bi-cart-plus-fill' />
							</Button>
						</div>
					</div>
				</Col>
			</Row>
			<div className='related-products my-5'>
				<Heading head={"products"} body={"Related Products "} />
				<SingleCategory category={product?.category} />
			</div>
		</Container>
	);
};

export default SingleProduct;
