import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home";
import Movies from "./Pages/Movies";
import Login from "./Pages/Login";
import PrivateRoute from "./Components/PrivateRoute";
import MovieDetails from "./Pages/MovieDetails";
import AddMovie from "./Pages/AddMovie";
import EditMovie from "./Pages/EditMovie";

const App = () => {
	return (
		<div>
			
			<Navbar />
			
			<Routes>
				<Route path="/" element={<Home />} />
				<Route
					path="/movies"
					element={
						<PrivateRoute>
							<Movies />
						</PrivateRoute>
					}
				/>
				<Route
					path="/movies/:id"
					element={
						<PrivateRoute>
							<MovieDetails />
						</PrivateRoute>
					}
				/>
				<Route
					path="/add-movie"
					element={
						<PrivateRoute>
							<AddMovie />
						</PrivateRoute>
					}
				/>
				<Route
					path="/edit-movie/:id"
					element={
						<PrivateRoute>
							<EditMovie />
						</PrivateRoute>
					}
				/>
				<Route path="/login" element={<Login />} />
			</Routes>
			
		</div>
	);
};

export default App;