import React from 'react'
import { ContextProvider } from './Context';
import { FormLogin } from './Form';


const LoginIndex = () => {

    return(
        <ContextProvider>
            <FormLogin />
        </ContextProvider>
    );
}

export { LoginIndex }