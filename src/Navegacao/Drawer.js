import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Inicial from '../views/Inicial'
import Cadastro from '../views/Cadastro'
import Login from '../views/Login'

const Drawer = createDrawerNavigator()

export default props => (
    <Drawer.Navigator initialRouteName="Inicial">
        <Drawer.Screen name="Inicial" component={Inicial}/>
        <Drawer.Screen name="Cadastro" component={Cadastro} />
        <Drawer.Screen name="Login" component={Login} />
    </Drawer.Navigator>

)
