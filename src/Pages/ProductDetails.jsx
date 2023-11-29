import { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../Contexts/CartContext";
import { ProductContext } from "../Contexts/ProductContext";

export const ProductDetails = () => {
	const { id } = useParams();
	const { products } = useContext(ProductContext);
	const { addToCart } = useContext(CartContext);

	const product = products.find((item) => {
		return item.id === parseInt(id);
	});

	if (!product) {
		return (
			<section className="flex h-screen justify-center items-center tracking-widest">
				Loading...
			</section>
		);
	}

	const { title, price, description, image } = product;

	return (
		<section className="flex items-center py-[60px] md:h-screen lg:py-[120px]">
			<div className="container mx-auto">
				<div className="flex flex-col items-center lg:flex-row">
					<div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
						<img className="max-w-[200px] lg:max-w-sm" src={image} alt={title} />
					</div>
					<div className="flex-1 text-center lg:text-left">
						<h1 className="max-w-[450px] text-[26px] font-medium mb-2 mx-auto lg:mx-0">{title}</h1>
						<p className="text-xl font-medium mb-6">£ {price}</p>
						<p className="mb-8">{description}</p>
						<button
							className="bg-[#222222] text-white py-4 px-8"
							onClick={() => addToCart(product, product.id)}>
							Add to cart
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};
