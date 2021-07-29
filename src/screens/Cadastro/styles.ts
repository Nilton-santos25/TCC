import { Dimensions, StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";


export const size = Dimensions.get('window').width // pegando o tamanho da tela do dispositivo

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "column",
        bottom: -50
    },
    textCad:{
        textAlign: 'center',
        fontSize: 25,
        color: theme.colors.heading,
        fontFamily: theme.fonts.text500,
        marginBottom: 30 
    },
    input: {
        height: 60,
        width: size-80,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: theme.colors.heading,
        marginBottom: 20,
        textAlign: 'center'
    },
    picker: {
        height: 60,
        width: size-80,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: theme.colors.heading,
        marginBottom: 20,
       
    }
   
})