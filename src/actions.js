import {
	EMAIL_CHANGE_SIGNIN,
	PASSWORD_CHANGE_SIGNIN,
	REQUEST_SIGNIN_PENDING,
	REQUEST_SIGNIN_SUCCESS,
	REQUEST_SIGNIN_FAILED,
	NAME_CHANGE_REGISTER,
	EMAIL_CHANGE_REGISTER,
	PASSWORD_CHANGE_REGISTER,
	CHANGE_ROUTE_TO_HOME,
	CHANGE_ROUTE_TO_SIGNIN,
	CHANGE_ROUTE_TO_REGISTER,
} from './constants';

export const onEmailChangeSignIn = (text) => ({
	type: EMAIL_CHANGE_SIGNIN,
	payload: text,
})

export const onPasswordChangeSignIn = (text) => ({
	type: PASSWORD_CHANGE_SIGNIN,
	payload: text,
})

export const onRequestSignIn = (email, password) => (dispatch) => {
	dispatch({ type: REQUEST_SIGNIN_PENDING });
	fetch('http://localhost:3000/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
  .then(response => response.json())
  .then(user => {
    if (user.id) {
	  	dispatch({ type: REQUEST_SIGNIN_SUCCESS, payload: user });
	  	dispatch({ type: CHANGE_ROUTE_TO_HOME });
    }  else {
    	dispatch({ type: REQUEST_SIGNIN_FAILED, payload: 'error signing in'})
    }
  })
  .catch(err => dispatch({ type: REQUEST_SIGNIN_FAILED, payload: 'error signing in'}))
}

export const onChangeRouteToHome = () => ({
	type: CHANGE_ROUTE_TO_HOME,
	payload: '',
})

export const onChangeRouteToSignIn = () => ({
	type: CHANGE_ROUTE_TO_SIGNIN,
	payload: '',
})

export const onChangeRouteToRegister = () => ({
	type: CHANGE_ROUTE_TO_REGISTER,
	payload: '',
})

export const onNameChangeRegister = (text) => ({
	type: NAME_CHANGE_REGISTER,
	payload: text,
})

export const onEmailChangeRegister = (text) => ({
	type: EMAIL_CHANGE_REGISTER,
	payload: text,
})

export const onPasswordChangeRegister = (text) => ({
	type: PASSWORD_CHANGE_REGISTER,
	payload: text,
})