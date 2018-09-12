import { combineReducers } from 'redux';

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
	CHANGE_ROUTE_TO_REGISTER
} from './constants';

const initialStateSignIn = {
  signInEmail: '',
  signInPassword: '',
}

export const signIn = (state=initialStateSignIn, action={}) => {
	switch (action.type) {
		case EMAIL_CHANGE_SIGNIN:
			return Object.assign({}, state, { signInEmail: action.payload})
		case PASSWORD_CHANGE_SIGNIN:
			return Object.assign({}, state, { signInPassword: action.payload})
		default:
			return state
	}
}

const initialStateRegister = {
  registerName: '',
  registerEmail: '',
  registerPassword: '',
}

export const register = (state=initialStateRegister, action={}) => {
	switch (action.type) {
		case NAME_CHANGE_REGISTER:
			return Object.assign({}, state, { registerName: action.payload })
		case EMAIL_CHANGE_REGISTER:
			return Object.assign({}, state, { registerEmail: action.payload })
		case PASSWORD_CHANGE_REGISTER:
			return Object.assign({}, state, { registerPassword: action.payload })
		default:
			return state
	}
}

const initialStateRequest = {
  isPending: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: '',
  },
}

export const requestUserAndRoute = (state=initialStateRequest, action={}) => {
	switch (action.type) {
		case REQUEST_SIGNIN_PENDING:
			return Object.assign({}, state, { isPending: true })
		case REQUEST_SIGNIN_SUCCESS:
			return Object.assign({}, state, { 
				isPending: false,
				user: {
			    id: action.payload.id,
			    name: action.payload.name,
			    email: action.payload.email,
			    entries: action.payload.entries,
			    joined: action.payload.joined,
				}
			})
		case REQUEST_SIGNIN_FAILED:
			return Object.assign({}, state, { isPending: false })
		default:
			return state
	}
}

const initialStateRoute = {
  route: 'signin',
  isSignedIn: false,
}

export const routeChange = (state=initialStateRoute, action={}) => {
	switch (action.type) {
		case CHANGE_ROUTE_TO_HOME: 
			return Object.assign({}, state, { route: 'home', isSignedIn: true })
		case CHANGE_ROUTE_TO_SIGNIN: 
			return Object.assign({}, state, { route: 'signin', isSignedIn: false })
		case CHANGE_ROUTE_TO_REGISTER: 
			return Object.assign({}, state, { route: 'register', isSignedIn: false })
		default:
			return state
	}
}

const initialStateApp = {
  input: '',
  imageUrl: '',
  box: {},
}


export const rootReducer = combineReducers({ signIn, register, requestUserAndRoute, routeChange });