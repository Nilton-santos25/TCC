import React from 'react'
import { Text, 
        TextInput,
        View,
        StyleSheet,
        TouchableOpacity,
        Dimensions
    }
 from 'react-native'

export let width = Dimensions.get('window').width //pegando o tamanho da tela
 
import commonStyles from '../commonStyles'


const tela = require ('../assets/img/trabalho.jpg')
export default props => {
    return(
        <View style={styles.container}>
                <View>
                    <Text style={styles.titleName}>Faça seu Cadastro</Text>
                </View>

                <View style={styles.inputName} >
                    <TextInput placeholder="Name"></TextInput>
                </View>
                
                <View style={styles.inputName} >
                    <TextInput placeholder="Email"></TextInput>
                </View>

                <View style={styles.inputName} >
                    <TextInput placeholder="Telefone"></TextInput>
                </View>

                <View style={styles.inputName} >
                    <TextInput placeholder="Especialidade"></TextInput>
                </View>

                <View style={styles.inputName} >
                    <TextInput placeholder="Estado"></TextInput>
                </View>
                
                <View style={styles.inputName} >
                    <TextInput placeholder="Cidade"></TextInput>
                </View>

                <View>
                    <TouchableOpacity style={styles.btnCadastro}>
                        <Text style={styles.txtBtnCadastro}>Cadastrar</Text>   
                    </TouchableOpacity>   
                </View>
            
        </View>
        
    )
}

const styles = StyleSheet.create({
    titleName: {
        marginTop: 30,
        fontSize: 30,
        fontFamily: commonStyles.fontFamily,
        alignItems: 'center',
        textAlign: 'center',
        },
    inputName: {
        width: width-50,
        borderWidth: 2,
        borderRadius: 10,
        marginTop: 15,
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center'
    },
    container: {
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        flexDirection: 'column',
        backgroundColor: commonStyles.colors.mainContainer
    },
    btnCadastro: {
        marginTop: 15,
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        borderWidth: 2,
        borderColor: commonStyles.colors.btnColor,
        width: width-50,
        borderRadius: 7
    },

    txtBtnCadastro: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF'
    },
    
})