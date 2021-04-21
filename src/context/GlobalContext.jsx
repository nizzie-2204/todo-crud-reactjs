import React, { useReducer } from "react";
// import { v4 as uuidv4 } from "uuid";
import Reducer from "../context/Reducer";

const initialState = {
	users: [],
};

export const UserContext = React.createContext(initialState);

export const GlobalContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(Reducer, initialState);

	const removeUser = (id) => {
		console.log(id);
		dispatch({
			type: "REMOVE_USER",
			id: id,
		});
	};

	const addUser = (user) => {
		dispatch({
			type: "ADD_USER",
			user: user,
		});
	};

	const editUser = (user) => {
		console.log(user);
		dispatch({
			type: "EDIT_USER",
			user: user,
		});
	};

	return (
		<UserContext.Provider
			value={{ users: state.users, removeUser, addUser, editUser }}
		>
			{children}
		</UserContext.Provider>
	);
};
