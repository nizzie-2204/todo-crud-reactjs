import React, { useContext, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { UserContext } from "../context/GlobalContext";

function EditUser() {
	const { users, editUser } = useContext(UserContext);
	const { id } = useParams();
	const history = useHistory();
	const [updateName, setUpdateName] = useState(() => {
		const currUser = users.find((user) => {
			return user.id === id;
		});

		return currUser.name;
	});

	const onChange = (e) => {
		setUpdateName(e.target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		const newUser = {
			id: id,
			name: updateName,
		};
		editUser(newUser);

		history.push("/");
	};

	return (
		<Form onSubmit={onSubmit}>
			<FormGroup>
				<Label>Name</Label>
				<Input
					type="text"
					value={updateName}
					onChange={onChange}
					name="name"
					placeholder="Enter user"
					required
				></Input>
			</FormGroup>
			<Button type="submit">Edit Name</Button>
			<Link to="/" className="btn btn-danger ml-2">
				Cancel
			</Link>
		</Form>
	);
}

export default EditUser;
