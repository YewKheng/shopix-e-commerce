import { useContext } from "react";
import { ProductContext } from "../Contexts/ProductContext";
import { Product } from "../Components";

export const CategoryMen = () => {
	const { products } = useContext(ProductContext);

	const filteredProducts = products.filter((item) => {
		return item.category === "men's clothing";
	});

	return (
		<section className="min-h-screen py-[60px]">
			<div className="container mx-auto">
				<div className="grid grid-cols-1 gap-[30px] max-w-sm mx-auto md:grid-cols-2 md:max-w-none md:mx-0 lg:grid-cols-4 xl:grid-cols-5">
					{filteredProducts.map((product) => {
						return <Product product={product} key={product.id} />;
					})}
				</div>
			</div>
		</section>
	);
};
