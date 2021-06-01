import React from 'react'
import { Text, 
        TextInput,
        View,
        StyleSheet,
        TouchableOpacity,
        Dimensions,
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

                <View style={styles.inputName} >
                    <TextInput placeholder="Estado"></TextInput>
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
        fontSize: 35,
        fontWeight:'bold',
        fontFamily: commonStyles.fontFamily,
        color: '#4953B8',
        alignItems: 'center',
        textAlign: 'center',
        },
    inputName: {
        width: width-50,
        paddingTop: 10,
        paddingBottom: -5,
        borderBottomWidth: 2,
        borderBottomColor: '#3646DB',
        alignItems: 'center',
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
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        borderWidth: 2,
        borderColor: '#3646DB',
        width: width-50,
        justifyContent:'center',
        alignItems: 'center',
        height: 60,
        borderRadius: 10,
        bottom: -50,
    },
    txtBtnCadastro: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#3646DB', 
    },
    
})