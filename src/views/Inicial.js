import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native'

export let width = Dimensions.get('window').width //pegando o tamanho da tela
const trabalho = require ('../assets/img/trabalho.jpg') //colocando uma imagem na aplicação

import commonStyles from '../commonStyles'

export default function Inicial ({ navigation }){
    return (
    <View style={styles.container}>
        <View>
            <Text style={styles.logo}>ME CONTRATA AÊ</Text>
        </View>

        <View style={styles.image}>
            <Image source={trabalho} width={150} height={190}/>
        </View>

        <View style={styles.description}> 
            <Text style={styles.title}>Seja bem vindo ao Me contrata AÊ</Text>
            <Text style={styles.subTitle}>conheça os melhores profissionais para realizar seu trabalho</Text>

        </View>

        <View style={styles.botton}> 
            <TouchableOpacity
                style={styles.btn}
                onPress={ () =>  navigation.navigate('Login')}
            >
            <Text style={styles.btnText}>Login</Text>
            </TouchableOpacity>
        </View>

    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, //estilo ocupa toda a tela
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 25,
        paddingRight: 25,
        backgroundColor: commonStyles.colors.mainContainer
    }, 
    logo: {
        marginTop: -100,
        fontSize: 30,
        //fontWeight: 'bold',
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.mainText,
    },
    image: {
        marginTop: -50
    },
    description: {
        alignItems: 'center'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    subTitle: {
        fontSize: 18,
        marginTop: 25,
        textAlign: 'center'
    }, 
    botton: {
        position: 'absolute',
        bottom: 40, //coloca o botao embaixo da tela
    }, 
    btn: {
        width: width-50, 
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 5,
        paddingBottom: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#3646DB'
    },
    btnText: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        color: commonStyles.colors.btnColor
    }
})