import React from "react";
import { Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Heading from "./../components/Heading";
import {
	clear,
	decreaseQuantity,
	deleteFromCart,
	increaseQuantity,
} from "../rtk_states/slices/cartSlice";

const CartPage = () => {
	const cart = useSelector((state) => state.cart);

	const dispatch = useDispatch();

	let totalPrice = cart.reduce((acc, product) => {
		acc += product.price * product.quantity;
		return acc;
	}, 0);

	return (
		<Container className='cart-container'>
			<Heading head={"cart"} body={"Your Shopping Cart"} />
			{cart.length === 0 ? (
				<div className='cart-empty'>
					<p>Your cart is currently empty</p>
					<div className='start-shopping'>
						<Link to='/'>
							<i className='bi bi-arrow-left fs-5' />
							<span>Start Shopping</span>
						</Link>
					</div>
				</div>
			) : (
				<div>
					<div className='titles'>
						<h3 className='product-title'>Product</h3>
						<h3 className='price'>Price</h3>
						<h3 className='quantity'>Quantity</h3>
						<h3 className='total'>Total</h3>
					</div>
					<div className='cart-items'>
						{cart &&
							cart.map((cartItem) => (
								<div className='cart-item' key={cartItem.id}>
									<div className='cart-product'>
										<img src={cartItem.image} alt={cartItem.title} />
										<div>
											<h3>{cartItem.title}</h3>
											<button
												className='text-danger '
												onClick={() => {
													dispatch(deleteFromCart(cartItem));
												}}
											>
												<i className='bi bi-trash-fill fs-5' /> Remove
											</button>
										</div>
									</div>
									<div className='cart-product-price'>${cartItem.price}</div>
									<div className='cart-product-quantity'>
										<button
											onClick={() => dispatch(increaseQuantity(cartItem))}
										>
											<i className='bi bi-plus-lg' />
										</button>
										<div className='count'>{cartItem.quantity}</div>
										<button
											onClick={() => {
												dispatch(decreaseQuantity(cartItem));
											}}
										>
											<i className='bi bi-dash-lg' />
										</button>
									</div>
									<div className='cart-product-total-price'>
										${(cartItem.price * cartItem.quantity).toFixed(2)}
									</div>
								</div>
							))}
					</div>
					<div className='cart-summary'>
						<Button
							variant='outline-danger'
							size='lg'
							onClick={() => dispatch(clear())}
						>
							Clear Cart <i className='bi bi-exclamation-circle-fill' />
						</Button>
						<div className='cart-checkout'>
							<div className='subtotal'>
								<span>Subtotal</span>
								<span className='amount'>${totalPrice.toFixed(2)}</span>
							</div>
							<p>Taxes and shipping calculated at checkout</p>
							<button>
								Check out <i className='bi bi-stripe' />
							</button>
							<div className='continue-shopping'>
								<Link to='/'>
									<i className='bi bi-arrow-left fs-5' />
									<span>Continue Shopping</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
			)}
		</Container>
	);
};

export default CartPage;
