import { Button } from '@material-ui/core';
import React from 'react';
import { auth, provider } from '../../firebase';
import './Login.css';
import { useStateValue } from '../../StateProvider';
import { actionTypes } from '../../reducer';

export default function Login() {

    const [{}, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(result => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                });
            })
            .catch(error => alert(error.message));
    }

    return (
        <div className="login">
            <div className="login__container">
                <div>
                    <h1>Sign in to WhatsAPP</h1>
                </div>

                <Button onClick={signIn}>
                    Sign in with Google
                </Button>
            </div>
        </div>
    )
}
