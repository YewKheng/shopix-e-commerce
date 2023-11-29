import { useContext } from "react";
import { ProductContext } from "../Contexts/ProductContext";
import { Hero } from "../Components";
import { Product } from "../Components";

export const Home = () => {
	const { products } = useContext(ProductContext);

	const filteredProducts = products.filter((item) => {
		return item.category === "men's clothing" || item.category === "women's clothing";
	});

	return (
		<section className="min-h-screen pb-[60px]">
			<Hero />
			<div className="container mx-auto pt-[60px]">
				<div className="grid grid-cols-1 gap-[30px] max-w-sm mx-auto md:grid-cols-2 md:max-w-none md:mx-0 lg:grid-cols-4 xl:grid-cols-5">
					{filteredProducts.map((product) => {
						return <Product product={product} key={product.id} />;
					})}
				</div>
			</div>
		</section>
	);
};
