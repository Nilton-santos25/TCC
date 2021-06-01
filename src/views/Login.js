import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Dimensions, TextInput } from 'react-native'
 
export let width = Dimensions.get('window').width

export default function Login ({ navigation }){
    return(
        <View style={styles.container}>
            <View >
                <TextInput placeholder="Nome" 
                style={styles.inputUser}></TextInput>
            </View>

            <View>
                <TextInput placeholder="Senha"
                secureTextEntry={true}
                style={styles.inputUser}></TextInput>
            </View>

            <View>
                <TouchableOpacity style={styles.btnLogin}>
                    <Text>Login</Text>
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity style={styles.btnSing}>
                    <Text>Sing-in</Text>
                </TouchableOpacity>
            </View>


            <View>
                <TouchableOpacity style={styles.btnCadastreSe}
                    onPress={ () => navigation.navigate('Cadastro')}
                >
                    <Text>
                        Cadastre-se
                    </Text>
                </TouchableOpacity>    
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }, 

    btnLogin: {
        width: width-80, 
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 5,
        paddingBottom: 10,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: '#3646DB', 
        backgroundColor: '#3646DB',
        bottom: -140       
    },
    btnSing: {
        width: width-80,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 5,
        paddingBottom: 10,
        borderRadius: 30,
        borderColor: '#d6e6f2',
        borderWidth:2,
        marginTop: 10,
        backgroundColor:'#d6e6f2',
        bottom: -150
    },
    inputUser: {
        width: width-50,
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#3646DB',
        alignItems: 'center',
        marginTop: 20,
        bottom: -85
    },
    btnCadastreSe: {
        bottom: -160
    }


})