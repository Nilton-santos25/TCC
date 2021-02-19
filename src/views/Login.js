import React from 'react'
import { Text, StyleSheet, View, Dimensions, Image, TouchableOpacity } from 'react-native'

import commonStyles from '../commonStyles'

export let width = Dimensions.get('window').width //pega o tamanho da tela
//const logo = require('../assets/img/trabalho.jpg') //inserindo imagem

export default props => {
    return (
    <View style={styles.container}>
        <View style={styles.header}>
            {/* <View style={styles.logo}>
                <Image source={logo} width={78} height={79} />
            </View> */}

            <View style={styles.headerContent}>
                <View style={styles.headerContentItemActive}>
                    <TouchableOpacity style={styles.headerContentButton}> 
                        <Text style={styles.headerContentButtonTextActive}>Login</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.headerContentItem}>
                    <TouchableOpacity style={styles.headerContentButton}> 
                        <Text style={styles.headerContentButtonText}>Sing</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>

        <View style={styles.main}></View>
        <View style={styles.bottom}></View>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        paddingLeft: 25,
        paddingRight: 25,
        paddingTop: 25,
        backgroundColor: commonStyles.colors.mainContainer
    },
    logo: {
        alignItems: 'center',
    },
    headerContent: {
        flexDirection: 'row',
        marginTop: 35,
    },
    headerContentItem: {
        width: width/2,
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#CCC',
    },
    headerContentItemActive: {
        width: width/2,
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomWidth: 4,
        borderBottomColor: '#3646DB',
        alignItems: 'center'


    },
    headerContentButton: {
        width: width/2,
        alignItems: 'center'
    },
    headerContentButtonText: {
        fontWeight: 'bold',
        color: '#CCC',
        fontSize: 16
    },
    headerContentButtonTextActive: {
        fontWeight: 'bold',
        fontSize: 16,
    }
    
})