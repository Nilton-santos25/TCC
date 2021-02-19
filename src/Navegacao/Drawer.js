import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Cadastro from '../views/Cadastro'
import Login from '../views/Login'
import Teste from '../views/Teste'
import TesteA from '../views/TesteA'

const Drawer = createDrawerNavigator()

export default props => (
    <Drawer.Navigator initialRouteName="Cadastro">
        <Drawer.Screen name="Cadastro" component={Cadastro}/>
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Teste" component={Teste} />
        <Drawer.Screen name="TesteA" component={TesteA} />
    </Drawer.Navigator>

)
