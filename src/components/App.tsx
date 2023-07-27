import React from "react";
import {Routes, NavLink, Route} from "react-router-dom";
import {HomePage} from "../Pages/HomePage";
import {AddWood} from "../Pages/AddWood";
import {WoodProcessing} from "../Pages/WoodProcesing";
import {AllWood} from "../Pages/AllWood";
export const App = () => {
	return (
		<div>
			<nav>
				<NavLink to="/">Головна сторінка</NavLink>
				<NavLink to="/add">Приход кругляку</NavLink>
				<NavLink to="/woodProcesing">Взяти в роботу</NavLink>
				<NavLink to="/allItems">Склад</NavLink>
			</nav>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/add" element={<AddWood />} />
				<Route path="/woodProcesing" element={<WoodProcessing />} />
				<Route path="/allItems" element={<AllWood />} />
			</Routes>
		</div>
	);
};
