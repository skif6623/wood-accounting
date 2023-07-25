import React from "react";
import { Routes, NavLink, Route } from "react-router-dom";
import { HomePage } from "../Pages/HomePage";
import { AddWood } from "../Pages/AddWood";
import { WoodProcesing } from "../Pages/WoodProcesing";
import { AllWood } from "../Pages/AllWood";
import { Provider } from "react-redux";
import store from "../redux/store";

export const App = () => {
  return (
    <Provider store={store}>
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
	</Provider>
	);
};
