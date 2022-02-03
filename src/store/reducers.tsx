// I used reducer for saving the state of the user responses
import { combineReducers } from 'redux';

/*-----------------------------------*/
export interface userResponse {
    response:  boolean;
}

const initialResponse = {
    response: false
};

/*-----------------------------------*/
export interface arrrayResponse  {
     responseArray: string[];
}
const initialArray = {
    responseArray: [],
};


/*-----------------------------------*/
export interface actualRoute{
    route: string
}

const initialRoute = {
    route: "/"
}
/*-----------------------------------*/
export type responseAction = { type: "SET_RESPONSE"; payload: boolean };

export type arrayAction = { type: "SET_ARRAY_RESPONSE"; payload: number };

export type routeAction = {type: "SET_ROUTE"; route: string }


/*-----------------------------------*/

 const responseReducer = (
    state: userResponse = initialResponse,
    action: responseAction
) => {
    switch (action.type) {
        case "SET_RESPONSE": {
            return { ...state, notes: action.payload };
        }
        default:
            return state;
    }
};





const arrayReducer = (
    state: arrrayResponse = initialArray,
    action: arrayAction
) => {
    switch (action.type) {
        case "SET_ARRAY_RESPONSE": {

            return { ...state, responseArray: [...state.responseArray,action.payload] };
        }

        default:
            return state;
    }
};


const routeReducer = (
    state: actualRoute = initialRoute,
    action: routeAction
) => {
    switch (action.type) {
        case "SET_ROUTE": {
            return { ...state, route: action.route };
        }
        default:
            return state;
    }
};


export default combineReducers({
    responseReducer,
    arrayReducer,
    routeReducer
});