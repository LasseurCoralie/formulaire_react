import { connect } from 'react-redux';

import { Form } from '../components/form/form.component.jsx';
import { login, changeField } from '../actions/index';

const mapStateToProps = (state) => ({
    emailValue: state.email,
    passwordValue: state.password,
    userValue: state.user,
});

const mapDispatchToProps = (dispatch) => ({
    changeFieldValue: (name, value) => {
        dispatch(changeField(name, value));
    },
    login: () => {
        console.log('Lanchement de la connexion');
        dispatch(login());
    },
});

const FormContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Form);

export default FormContainer;