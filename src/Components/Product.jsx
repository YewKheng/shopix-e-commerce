import { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";
import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";

export const Product = ({ product }) => {
	const { id, image, category, title, price } = product;
	const { addToCart } = useContext(CartContext);

	return (
		<div>
			<div className="relative border border-[#e4e4e4] h-[300px] mb-4 group transition overflow-hidden">
				<div className="flex w-full h-full justify-center items-center">
					<div className="flex w-[200px] justify-center items-center mx-auto">
						<img
							className="max-h-[160px] group-hover:scale-110 transition duration-300"
							src={image}
							alt={title}
						/>
					</div>
				</div>

				<div className="absolute flex flex-col justify-center items-center top-5 -right-10 p-2 gap-y-2 opacity-0 hover-hover:group-hover:right-5 hover-hover:group-hover:opacity-100 duration-300 hover-none:flex-row-reverse hover-none:top-0 hover-none:right-1 hover-none:opacity-100">
					<button
						className="flex bg-red-500 w-12 h-12 justify-center items-center"
						onClick={() => {
							addToCart(product);
						}}>
						<BsPlus className="text-white text-3xl" />
					</button>
					<Link
						to={`/product/${id}`}
						className="flex bg-white w-12 h-12 justify-center items-center drop-shadow-xl">
						<BsEyeFill className="text-[#222222]" />
					</Link>
				</div>
			</div>

			<div>
				<p className="text-gray-500 capitalize text-sm mb-1">{category}</p>
				<Link to={`/product/${id}`}>
					<h2 className="font-semibold mb-1 hover:underline underline-offset-4">{title}</h2>
				</Link>
				<p className="font-semibold">£ {price}</p>
			</div>
		</div>
	);
};
