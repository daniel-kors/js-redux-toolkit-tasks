import omit from "lodash/omit";
import { legacy_createStore as createStore } from "redux";

// BEGIN (write your solution here)
const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'TASK_ADD': {
            const { task } = action.payload;
            return { ...state, [task.id]: task };
        }
        case 'TASK_REMOVE': {
            const { id } = action.payload;
            return omit(state, id);
        }
        case 'TASK_UPDATE': {
            const { id, updatedTask } = action.payload;
            return { ...state, [id]: { ...state[id], ...updatedTask } };
        }
        default:
            return state;
    }
};

export default (initialState = {}) => {
    return createStore(reducer, initialState);
};
// END
