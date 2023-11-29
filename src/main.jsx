import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductProvider } from "./Contexts/ProductContext";
import { SidebarProvider } from "./Contexts/SidebarContext";
import { CartProvider } from "./Contexts/CartContext";
import { App } from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<SidebarProvider>
		<CartProvider>
			<ProductProvider>
				<Router>
					<App />
				</Router>
			</ProductProvider>
		</CartProvider>
	</SidebarProvider>
);
