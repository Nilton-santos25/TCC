import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center', 
        //backgroundColor: theme.colors.background
    }, 
    image: {
       width: '100%',
       height: 360,
    },
    content: {
        marginTop: 20
    },
    title: {
        color: theme.colors.heading,
        textAlign: 'center',
        fontSize: 46,
        marginBottom: 16,
        fontFamily: theme.fonts.title800,
    },
    subtitle: {
        color: theme.colors.heading,
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 64,
        fontFamily: theme.fonts.text500,
        lineHeight: 25,
    }


})