import { Link } from "react-router-dom";
import { AiOutlineShopping, AiOutlineClose } from "react-icons/ai";
import { TfiMenuAlt } from "react-icons/tfi";
import { useContext, useState } from "react";
import { SidebarContext } from "../Contexts/SidebarContext";
import { CartContext } from "../Contexts/CartContext";

export const Navbar = () => {
	const [toggle, setToggle] = useState(false);
	const { setOpen } = useContext(SidebarContext);
	const { itemAmount } = useContext(CartContext);

	return (
		<nav className="bg-pink-200 shadow-md w-full z-10">
			<div className="container flex h-[60px] justify-between items-center mx-auto xl:px-40">
				<button className="inline lg:hidden" onClick={() => setToggle((prev) => !prev)}>
					{toggle ? <AiOutlineClose className="text-xl" /> : <TfiMenuAlt className="text-xl" />}
				</button>

				<ul
					className={`${
						toggle ? "top-[60px] left-0" : "-top-72 left-0"
					} absolute bg-pink-100/90 shadow-md flex flex-col w-full z-10 transition-all duration-300 lg:hidden`}>
					<Link
						className="nav-links-toggle"
						to="/categories/men"
						onClick={() => setToggle((prev) => !prev)}>
						Men
					</Link>
					<Link
						className="nav-links-toggle"
						to="/categories/women"
						onClick={() => setToggle((prev) => !prev)}>
						Women
					</Link>
					<Link
						className="nav-links-toggle"
						to="/categories/jewelery"
						onClick={() => setToggle((prev) => !prev)}>
						Jewelery
					</Link>
					<Link
						className="nav-links-toggle"
						to="/categories/electronics"
						onClick={() => setToggle((prev) => !prev)}>
						Electronics
					</Link>
				</ul>

				<ul className="hidden font-medium lg:flex lg:gap-x-5">
					<Link className="nav-links" to="/categories/men">
						Men
					</Link>
					<Link className="nav-links" to="/categories/women">
						Women
					</Link>
					<Link className="nav-links" to="/categories/jewelery">
						Jewelery
					</Link>
					<Link className="nav-links" to="/categories/electronics">
						Electronics
					</Link>
				</ul>

				<Link to="/">
					<h1 className="text-3xl font-semibold uppercase lg:pr-[250px]">Shopix</h1>
				</Link>
				<button className="relative flex max-w-[50px]" onClick={() => setOpen((prev) => !prev)}>
					<AiOutlineShopping className="text-2xl" />
					<label className="absolute flex bg-red-500 -right-2 -bottom-2 justify-center items-center w-[18px] h-[18px] text-white text-xs rounded-full">
						{itemAmount}
					</label>
				</button>
			</div>
		</nav>
	);
};
