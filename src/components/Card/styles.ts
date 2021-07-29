import { StyleSheet } from "react-native";

import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardButton: {
        width: '90%',
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 17,
        backgroundColor: theme.colors.secondary80,
        marginBottom: 20

    },
    textCard: {
        color: theme.colors.heading,
        fontSize: 40,
        fontFamily: theme.fonts.title800,
    }
}) 