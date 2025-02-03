import React, { createContext, useState, useEffect } from "react";
import { replace, useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {
	
	const [isAuthenticated, setAuthenticated] = useState(() => {
		return localStorage.getItem("token") ? true : false;
	});
	const [token, setToken] = useState(null);
	const navigate = useNavigate();
	const location = useLocation();
	useEffect(() => {
		console.log(location, "in context");
	}, [location]);
	useEffect(() => {
		console.log(token);
	}, [token]);
	
	const login = (authToken) => {
		console.log(token);
		setAuthenticated(true);
		setToken(authToken);
		localStorage.setItem("token", authToken);
		navigate(location.state.from || "/");
		
	};
	const logout = () => {
		setToken(null);
		setAuthenticated(false);
		localStorage.removeItem("token");

		navigate("/login");
		
	};

	return (
		<AuthContext.Provider value={{ token, isAuthenticated, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContextProvider;