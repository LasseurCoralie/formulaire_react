import axios from 'axios';

import { LOGIN, saveUsername } from '../actions/index';

const authMiddleware = (store) => (next) => (action) => {
    switch (action.type){
        case LOGIN: {
            const state = store.getState();

            axios.post('./data.json', {
                user: state.user,
                password: state.password,
            })
            .then((response) => {
                console.log('CONNEXION!!!!');
                console.log('réponse data :' + response.data);
                store.dispatch(saveUsername(response.data));
            })
            .catch((error) => {
                console.log('erreur de connexion');
                console.log('erreur : ' + error);
            });
            next(action);
            break;
        }
        default:
            next(action);
            break;
    }
};

export default authMiddleware;