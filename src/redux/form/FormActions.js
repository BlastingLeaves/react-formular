import {ADD_TO_LIST} from "./FormConstants";

export const addToFormList = (payload) => {
    return {
        type: ADD_TO_LIST,
        payload
    };
};
