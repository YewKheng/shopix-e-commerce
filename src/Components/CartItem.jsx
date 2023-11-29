import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";

export const CartItem = ({ item }) => {
	const { id, title, image, price, amount } = item;
	const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext);

	return (
		<div className="flex w-full gap-x-4 py-2 border-b border-gray-200 lg:px-6">
			<div className="flex w-full min-h-[150px] items-center gap-x-4">
				<Link to={`/product/${title}`}>
					<img className="max-w-[80px]" src={image} alt={title} />
				</Link>

				<div className="flex flex-col w-full pr-2">
					<div className="flex justify-between mb-2">
						<Link
							to={`/product/${title}`}
							className="max-w-[240px] text-[#222222] text-sm uppercase font-medium hover:underline">
							{title}
						</Link>
						<button
							className="flex"
							onClick={() => {
								removeFromCart(id);
							}}>
							<IoMdClose className="text-gray-500 text-xl hover:text-red-500 transition" />
						</button>
					</div>

					<div className="flex h-[36px] gap-x-2 text-sm">
						<div className="flex flex-1 max-w-[100px] h-full items-center border">
							<button
								className="flex flex-1 justify-center items-center"
								onClick={() => {
									decreaseAmount(id);
								}}>
								<IoMdRemove />
							</button>
							<p className="flex h-full justify-center items-center px-2 text-[#222222] font-medium">
								{amount}
							</p>
							<button
								className="flex flex-1 justify-center items-center"
								onClick={() => {
									increaseAmount(id);
								}}>
								<IoMdAdd />
							</button>
						</div>
						<p className="flex flex-1 justify-around items-center text-gray-500 font-medium">
							£ {price}
						</p>
						<p className="flex flex-1 justify-end items-center text-[#222222] font-medium">{`£ ${parseFloat(
							item.price * amount
						).toFixed(2)}`}</p>
					</div>
				</div>
			</div>
		</div>
	);
};
