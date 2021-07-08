import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import projectSettingReducer from "../redux/projectSetting/reducer";
import skillCategory from "../redux/skillCategory/reducer";
import aboutMe from "../redux/aboutMe/reducer";

const reducer = combineReducers({
	projectSettingReducer,
	skillCategory,
	aboutMe,
});

const persistConfig = {
	key: "root",
	storage,
};
const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(
	persistedReducer,
	compose(
		applyMiddleware(thunk),
		window.devToolsExtension ? window.devToolsExtension() : (f) => f
	)
	// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export const persistor = persistStore(store);
