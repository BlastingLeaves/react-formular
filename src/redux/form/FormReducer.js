import {ADD_TO_LIST} from "./FormConstants";

// Define initial state
const initialState = {
    formData: [],
}

// Define reducer function
export const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_LIST:
            const updatedFormData = state.formData.map((person) => {
                if (person.id === action.payload.id) {
                    return {
                        ...person,
                        [action.payload.name]: action.payload.value,
                    };
                } else {
                    return person;
                }
            });

            if (updatedFormData.find((person) => person.id === action.payload.id)) {
                return {
                    ...state,
                    formData: updatedFormData,
                };
            } else {
                const newPerson = {
                    id: action.payload.id,
                    name: action.payload.name,
                    surname: action.payload.surname,
                    job: action.payload.job,
                    salary: action.payload.salary,
                    date: action.payload.date,
                };
                return {
                    ...state,
                    formData: [...state.formData, newPerson],
                };
            }
        default:
            return state;
    }
};
