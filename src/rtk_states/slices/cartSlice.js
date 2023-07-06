import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const toastPosition = "bottom-left";

export const cartSlice = createSlice({
	initialState: localStorage.getItem("cartItems")
		? JSON.parse(localStorage.getItem("cartItems"))
		: [],
	name: "catSlice",
	reducers: {
		addToCart: (state, action) => {
			const findProduct = state.find(
				(product) => product.id === action.payload.id,
			);
			if (findProduct) {
				findProduct.quantity += 1;
				toast.info("Increased product quantity", { position: toastPosition });
			} else {
				const productClone = { ...action.payload, quantity: 1 };
				state.push(productClone);
				toast.success("Product added to cart", {
					position: toastPosition,
				});
			}
			localStorage.setItem("cartItems", JSON.stringify(state));
		},
		increaseQuantity: (state, action) => {
			const productIndex = state.findIndex(
				(product) => product.id === action.payload.id,
			);

			state[productIndex].quantity += 1;
			localStorage.setItem("cartItems", JSON.stringify(state));
		},
		decreaseQuantity: (state, action) => {
			const productIndex = state.findIndex(
				(product) => product.id === action.payload.id,
			);

			if (state[productIndex].quantity > 1) {
				state[productIndex].quantity -= 1;
			} else {
				state = state.filter((product) => product.id !== action.payload.id);
				toast.error("The product removed!", { position: toastPosition });
				localStorage.setItem("cartItems", JSON.stringify(state));
				return state;
			}
		},
		deleteFromCart: (state, action) => {
			state = state.filter((product) => product.id !== action.payload.id);
			localStorage.setItem("cartItems", JSON.stringify(state));
			toast.error("The product removed!", { position: toastPosition });
			return state;
		},
		clear: (state, action) => {
			if (window.confirm("Are you sure")) {
				toast.error("The cart cleared!", { position: toastPosition });
				state = [];
				localStorage.setItem("cartItems", JSON.stringify(state));
				return state;
			}
		},
	},
});

export const {
	addToCart,
	deleteFromCart,
	clear,
	increaseQuantity,
	decreaseQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
