import { connect } from 'react-redux';
import { login, logout, signup, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';


const mapStateToProps = ( { session }, { formType }) => {
  return ({
    loggedIn: Boolean(session.currentUser),
    errors: session.errors,
    formType: formType
  }

);
};

const mapDispatchToProps = (dispatch, { formType }) => {
  const processForm = (formType === "login") ? login : signup;

  return {
    clearErrors: () => dispatch(clearErrors()),
    processForm: user => dispatch(processForm(user)),
    login: user => dispatch(login(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
