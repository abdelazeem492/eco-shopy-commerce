import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../rtk_states/slices/cartSlice";

const ProductCard = ({ product, cartBtn }) => {
	const dispatch = useDispatch();
	return (
		<div className='text-decoration-none text-black position-relative'>
			<div className='product-card mx-3'>
				<Link
					onClick={window.scrollTo(0, 0)}
					to={`/products/${product.id}`}
					className='product-img'
				>
					<img src={product.image} alt={product.title} loading='lazy' />
				</Link>
				<div className='product-card-desc'>
					<p className='text-secondary mb-1'>{product.category}</p>
					<p className='mb-1'>
						{product.title.length > 30
							? product.title.slice(0, 30) + "..."
							: product.title}
					</p>
					<p className='text-primary'>$ {product.price}</p>
				</div>
				{cartBtn && (
					<Button
						variant='danger'
						size='sm'
						className=' add-cart position-absolute'
						onClick={() => dispatch(addToCart(product))}
					>
						Add to cart <i className='bi bi-cart-plus-fill' />
					</Button>
				)}
			</div>
		</div>
	);
};

export default ProductCard;
