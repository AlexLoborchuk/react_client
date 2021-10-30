import { createStore, combineReducers} from "redux";
import { AdminReducer } from "./reducers/admin-reducer";
import { LoginReducer } from "./reducers/login-reducer";
import { ProfileReducer } from "./reducers/profile_reducer";


let RootReducers = combineReducers({
    login: LoginReducer,
    profile: ProfileReducer,
    admin: AdminReducer
});

export let store = createStore(RootReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


