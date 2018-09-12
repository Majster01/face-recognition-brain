import React from 'react';
import { connect } from 'react-redux';

import {
  onChangeRouteToHome,
  onChangeRouteToSignIn,
  onChangeRouteToRegister
} from '../../actions'

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.routeChange.isSignedIn,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeRouteToHome: () => dispatch(onChangeRouteToHome()),
    onChangeRouteToSignIn: () => dispatch(onChangeRouteToSignIn()),
    onChangeRouteToRegister: () => dispatch(onChangeRouteToRegister()),
  }
}

const Navigation = ({ 
  isSignedIn,  
  onChangeRouteToHome, 
  onChangeRouteToSignIn, 
  onChangeRouteToRegister}) => {
    if (isSignedIn) {
      return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <p 
            onClick={ onChangeRouteToSignIn } 
            className='f3 link dim black underline pa3 pointer'>
            Sign Out
          </p>
        </nav>
      );
    } else {
      return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <p 
            onClick={ onChangeRouteToSignIn } 
            className='f3 link dim black underline pa3 pointer'>
            Sign In
          </p>
          <p 
            onClick={ onChangeRouteToRegister } 
            className='f3 link dim black underline pa3 pointer'>
            Register
          </p>
        </nav>
      );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);