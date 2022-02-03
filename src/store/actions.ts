import {arrrayResponse} from "./reducers";

export type Action = { type: "SET_NOTE"; response: boolean };


export const addResponse = (response: boolean): Action => ({
    type: "SET_NOTE",
    response: response,
});





export type newAction = { type: "SET_ARRAY_RESPONSE"; payload:number };


export const addArrayResponse = (responses :number): newAction => ({
    type: "SET_ARRAY_RESPONSE",
   payload: responses,
});


export type routeAction = { type: "SET_ROUTE"; route:string };


export const addRoute = (route:string): routeAction => ({
    type: "SET_ROUTE",
    route: route,
});