export const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer className="bg-pink-200 py-10">
			<div className="container mx-auto">
				<p className="text-center">CopyRight &copy; {year} SHOPIX. All Right Reserved.</p>
			</div>
		</footer>
	);
};
