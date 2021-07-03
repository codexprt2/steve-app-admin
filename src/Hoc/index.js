import React from "react";
import Dashboard from "../Screens/Dashboard";
import { Provider } from "react-redux";
import { store, persistor } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";

const index = () => {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Dashboard />
			</PersistGate>
		</Provider>
	);
};

export default index;
