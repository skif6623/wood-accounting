import React from "react";
import {Routes, NavLink, Route} from "react-router-dom";
import {HomePage} from "../pages/HomePage";
import {AddWood} from "../pages/AddWood";
import {WoodProcesing} from "../pages/WoodProcesing";
import {AllWood} from "../pages/AllWood";
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
				<Route path="/woodProcesing" element={<WoodProcesing />} />
				<Route path="/allItems" element={<AllWood />} />
			</Routes>
		</div>
	);
};
