// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
	switch (action.type) {
		case "REMOVE_USER":
			return {
				users: state.users.filter((user) => {
					return user.id !== action.id;
				}),
			};

		case "ADD_USER":
			return {
				users: [...state.users, action.user],
			};

		case "EDIT_USER":
			return {
				users: state.users.map((user) => {
					if (user.id === action.user.id) {
						return action.user;
					}
					return user;
				}),
			};

		default:
			return state;
	}
};
