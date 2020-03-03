import React from 'react';

import { Field } from '../field/field.component';

export const Form = ({
    changeFieldValue, 
    emailValue, 
    passwordValue, 
    userValue,
    login
}) => {

    const handleSubmit = (evt) => {
        evt.preventDefault();
        // console.log('preventDefault working');

        login();
        console.log('connecté');
    }

    return(
        <div>
            <form autoComplete="off" onSubmit={handleSubmit}>
                <Field 
                    value={userValue}
                    name="user"
                    placeholder="Votre nom d'utilisateur"
                    type="text"
                    changeValue={changeFieldValue}
                />
                <Field 
                    value={passwordValue}
                    name="password"
                    placeholder="Votre mot de passe"
                    type="password"
                    changeValue={changeFieldValue}
                />
                <button type="submit">Login</button>
            </form>
        </div>
        
    );
}