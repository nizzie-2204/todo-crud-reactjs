import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
import { UserContext } from "../context/GlobalContext";

function ListUser() {
	const { users, removeUser } = useContext(UserContext);

	return (
		<ListGroup className="mt-4">
			{users.length > 0 ? (
				<>
					{users.map((user) => (
						<ListGroupItem className="d-flex" key={user.id}>
							<strong>{user.name}</strong>
							<div className="ml-auto">
								<Link
									to={`/edit/${user.id}`}
									color="warning"
									className="btn btn-warning mr-1"
								>
									Edit
								</Link>
								<Button onClick={() => removeUser(user.id)} color="danger">
									Delete
								</Button>
							</div>
						</ListGroupItem>
					))}
				</>
			) : (
				<h4 className="text-center">No Users</h4>
			)}
		</ListGroup>
	);
}

export default ListUser;
