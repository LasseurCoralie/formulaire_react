export const LOGIN = 'LOGIN';
export const CHANGE_FIELD = 'CHANGE_FIELD';
export const SAVE_USERNAME = 'SAVE_USERNAME';

export const login = () => ({
    type: LOGIN,
});

export const changeField = (name, value) => ({
    type: CHANGE_FIELD,
    name,
    value
});

export const saveUsername = (username) => ({
    type: SAVE_USERNAME,
    username
});
