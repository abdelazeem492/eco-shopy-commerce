import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import Footer from "./components/Footer";
import GoUp from "./utils/GoUp";
import CartPage from "./pages/Cart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
	return (
		<div className='App'>
			<NavBar />
			<ToastContainer />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/products' element={<Products />} />
				<Route path='/products/:id' element={<SingleProduct />} />
				<Route path='/cart' element={<CartPage />} />
			</Routes>
			<GoUp />
			<Footer />
		</div>
	);
}

export default App;
