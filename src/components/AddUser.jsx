import React, { useContext, useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../context/GlobalContext";
import { v4 as uuidv4 } from "uuid";

function AddUser() {
	const history = useHistory();
	const { addUser } = useContext(UserContext);
	const [name, setName] = useState("");

	const onChange = (e) => {
		setName(e.target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();

		const newUser = {
			id: uuidv4(),
			name: name,
		};
		addUser(newUser);

		history.push("/");
	};

	return (
		<Form onSubmit={onSubmit}>
			<FormGroup>
				<Label>Name</Label>
				<Input
					type="text"
					value={name}
					onChange={onChange}
					name="name"
					placeholder="Enter user"
					required
				></Input>
			</FormGroup>
			<Button type="submit">Submit</Button>
			<Link to="/" className="btn btn-danger ml-2">
				Cancel
			</Link>
		</Form>
	);
}

export default AddUser;
