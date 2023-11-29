import { Link } from "react-router-dom";

export const Hero = () => {
	return (
		<section className="bg-gradient h-[600px]">
			<div className="container flex flex-col h-[inherit] items-start mx-auto py-[30px] lg:flex-row lg:items-center xl:px-40">
				<div className="">
					<img
						className="min-w-[400px] h-[300px] object-cover"
						src="/shopping.png"
						alt="Shopping Bag"
					/>
				</div>
				<div className="flex flex-col sm:py-5">
					<h2 className="text-xl font-semibold uppercase mb-4 md:text-2xl xl:text-3xl xxl:text-4xl">
						- New Products -{" "}
					</h2>
					<h1 className="text-4xl font-light uppercase leading-[1.3] mb-4 md:text-5xl xl:text-6xl xxl:text-7xl">
						Autumn Sale{" "}
						<Link to="/categories/women" className="font-bold hover:underline underline-offset-8">
							Women's Collection
						</Link>{" "}
						&{" "}
						<Link
							to="/categories/jewelery"
							className="font-bold hover:underline underline-offset-8">
							Jewelery
						</Link>
					</h1>
				</div>
			</div>
		</section>
	);
};
