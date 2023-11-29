import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);
	const [itemAmount, setItemAmount] = useState(0);
	const [total, setTotal] = useState(0);

	const addToCart = (product) => {
		const newItem = { ...product, amount: 1 };

		const cartItem = cart.find((item) => {
			return item.id === product.id;
		});

		if (cartItem) {
			const newCart = [...cart].map((item) => {
				if (item.id === product.id) {
					return { ...item, amount: cartItem.amount + 1 };
				} else {
					return item;
				}
			});
			setCart(newCart);
		} else {
			setCart([...cart, newItem]);
		}
	};

	const removeFromCart = (id) => {
		const newCart = cart.filter((item) => {
			return item.id !== id;
		});
		setCart(newCart);
	};

	const clearCart = () => {
		setCart([]);
	};

	const increaseAmount = (id) => {
		const item = cart.find((item) => item.id === id);
		addToCart(item, id);
	};

	const decreaseAmount = (id) => {
		const cartItem = cart.find((item) => {
			return item.id === id;
		});

		if (cartItem) {
			const newCart = cart.map((item) => {
				if (item.id === id) {
					return { ...item, amount: cartItem.amount - 1 };
				} else {
					return item;
				}
			});
			setCart(newCart);
		}

		if (cartItem.amount < 2) {
			removeFromCart(id);
		}
	};

	useEffect(() => {
		if (cart) {
			const amountInCart = cart.reduce((accumulator, currentItem) => {
				return accumulator + currentItem.amount;
			}, 0);
			setItemAmount(amountInCart);
		}
	}, [cart]);

	useEffect(() => {
		const totalPrice = cart.reduce((accumulator, currentItem) => {
			return accumulator + currentItem.price * currentItem.amount;
		}, 0);
		setTotal(totalPrice);
	});

	return (
		<CartContext.Provider
			value={{
				cart,
				addToCart,
				removeFromCart,
				clearCart,
				increaseAmount,
				decreaseAmount,
				itemAmount,
				total,
			}}>
			{children}
		</CartContext.Provider>
	);
};
