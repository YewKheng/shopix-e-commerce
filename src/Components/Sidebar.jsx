import { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import { SidebarContext } from "../Contexts/SidebarContext";
import { CartContext } from "../Contexts/CartContext";
import { CartItem } from "./CartItem";

export const Sidebar = () => {
	const { open, handleClose } = useContext(SidebarContext);
	const { cart, clearCart, total, itemAmount } = useContext(CartContext);

	return (
		<div
			className={`${
				open ? "right-0" : "-right-full"
			} fixed bg-white w-full h-full top-0 px-4 shadow-2xl transition-all duration-300 z-20 sm:w-[50vw] md:w-[40vw] lg:px-[35px] xl:w-[35vw]`}>
			<div className="flex justify-between items-center border-b py-6">
				<h1 className="text-sm uppercase font-semibold">Shopping Cart ({itemAmount})</h1>
				<button className="flex w-8 h-8 justify-center items-center" onClick={handleClose}>
					<IoMdArrowForward className="text-2xl" />
				</button>
			</div>

			<div className="flex flex-col h-[490px] gap-y-2 overflow-y-auto overflow-x-hidden xxl:h-[700px]">
				{cart.map((item) => {
					return <CartItem key={item.id} item={item} />;
				})}
			</div>
			<div className="flex flex-col gap-y-3 py-4 mt-4">
				<div className="flex w-full justify-between items-center">
					<h1 className="uppercase font-bold">
						<span className="mr-2">Total:</span>
						{`£ ${parseFloat(total).toFixed(2)}`}
					</h1>
					<button
						className="flex bg-red-500 w-12 h-12 justify-center items-center py-4"
						onClick={() => {
							clearCart();
						}}>
						<FiTrash2 className="text-white text-xl" />
					</button>
				</div>
				<Link className="bg-gray-200 flex w-full justify-center items-center p-4 text-[#222222] font-medium">
					View Cart
				</Link>
				<Link className="bg-[#222222] flex w-full justify-center items-center p-4 text-white font-medium">
					Check Out
				</Link>
			</div>
		</div>
	);
};
