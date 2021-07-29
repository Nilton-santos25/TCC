//rotas para navegação ussando stack
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { SingIn } from '../screens/Signin';
import { Cadastro, } from '../screens/Cadastro';

const {Navigator, Screen } = createStackNavigator();

export function AuthRoutes(){
    return(
        <Navigator
            headerMode="none" //tira o cabeçalho da tela de navegação
            screenOptions={{
                cardStyle: {
                    backgroundColor: 'transparent'
                }
            }}   
        >
            <Screen
                name="SignIn"
                component={SingIn}
            />  
            <Screen 
                name="Home"
                component={Home}
            />
            <Screen 
                name="Cadastro"
                component={Cadastro}
            />
        </Navigator>
    )
}