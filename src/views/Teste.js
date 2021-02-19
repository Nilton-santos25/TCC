import React from 'react'
import { Text, 
        TextInput,
        View,
        StyleSheet,
        TouchableOpacity,
        ImageBackground} from 'react-native'

const tela = require ('../assets/img/trabalho.jpg')
export default props => {
    return(
        <View style={styles.container}>
            <ImageBackground source={tela} style={styles.image}>
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
                
            </ImageBackground>
            
        </View>
        
    )
}

const styles = StyleSheet.create({
    titleName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#B04E0F',
        alignItems: 'center',
        textAlign: 'center',
        },
    inputName: {
        alignItems:'center',
        height: 40,
        borderColor: '#B04E0F',
        borderWidth: 2,
        borderRadius: 20,
        marginTop: 15,
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center'
    },
    container: {
        flex:1,
        flexDirection: 'column',
    },
    btnCadastro: {
        marginTop: 15,
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#B04E0F'
    },
    txtBtnCadastro: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#B04E0F'
    }
})