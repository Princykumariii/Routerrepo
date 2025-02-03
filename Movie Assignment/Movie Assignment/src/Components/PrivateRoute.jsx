import React, { useContext, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/AuthContextProvider";
const PrivateRoute = ({ children }) => {
     const token =localStorage.getItem("token")
	const { isAuthenticated } = useContext(AuthContext); //context
	const location = useLocation();
	useEffect(() => {
		console.log(location);
	}, [location]);
	if (!isAuthenticated) {
		return  <Navigate to="/login" state={{ from: location }} />;
	}
	return children;
};

export default PrivateRoute;