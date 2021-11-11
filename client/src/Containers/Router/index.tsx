import React from "react"
import { Route, Routes } from "react-router"
import { BrowserRouter } from "react-router-dom"
import AuthForm from "../AuthForm";
import DevScreen from "../DevScreen";

const Router: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/dev" element={<DevScreen />}/>
				<Route path="/" element={<AuthForm />}/>
			</Routes>
		</BrowserRouter>
	);
}

export default Router;