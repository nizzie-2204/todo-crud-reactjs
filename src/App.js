import "./App.css";
import { GlobalContextProvider } from "./context/GlobalContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import EditUser from "./components/EditUser";
import AddUser from "./components/AddUser";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	return (
		<div style={{ maxWidth: "30rem", margin: "4rem auto" }}>
			<GlobalContextProvider>
				<Router>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/edit/:id" component={EditUser} />
						<Route exact path="/add" component={AddUser} />
					</Switch>
				</Router>
			</GlobalContextProvider>
		</div>
	);
}

export default App;
