import { createContext, useState } from "react";

export const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
	const [open, setOpen] = useState(false);
	const handleClose = () => {
		setOpen(false);
	};

	return (
		<SidebarContext.Provider value={{ open, setOpen, handleClose }}>
			{children}
		</SidebarContext.Provider>
	);
};
