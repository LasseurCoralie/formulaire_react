import {
    LOGIN,
    CHANGE_FIELD,
    SAVE_USERNAME
} from '../actions/index'

const initialState = {
    user: '',
    email: '',
    password: '',
    loading: false,
};

const loginReducer = (state = initialState, action = {}) => {
    console.log('login reducer : ', action);

    switch(action.type) {
        case LOGIN:
            return{
                ...state,
                loading: true,
            };
        case CHANGE_FIELD:
            return {
                ...state,
                [action.name]: action.value,
            };
        case SAVE_USERNAME:
            return {
                ...state,
                username: action.username,
                loading: false,
            };
        default: 
            return state;
    }
}

export default loginReducer;