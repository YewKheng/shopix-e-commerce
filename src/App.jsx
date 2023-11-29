import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { ProductDetails } from "./Pages/ProductDetails";
import { CategoryMen } from "./Pages/CategoryMen";
import { CategoryWomen } from "./Pages/CategoryWomen";
import { CategoryJewelery } from "./Pages/CategoryJewelery";
import { CategoryElectronics } from "./Pages/CategoryElectronics";
import { Navbar, Sidebar, Footer } from "./Components";

export const App = () => {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/product/:id" element={<ProductDetails />} />
				<Route path="/categories/men" element={<CategoryMen />} />
				<Route path="/categories/women" element={<CategoryWomen />} />
				<Route path="/categories/jewelery" element={<CategoryJewelery />} />
				<Route path="/categories/electronics" element={<CategoryElectronics />} />
			</Routes>
			<Sidebar />
			<Footer />
		</div>
	);
};
