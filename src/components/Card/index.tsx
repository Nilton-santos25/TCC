import React from 'react';
import { View, Text, Image } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { styles } from './styles'

type Props = RectButtonProps & {
    title: string;
    thumbnail: string;
}


export function Card({title, thumbnail, ...rest}: Props){
    return(
        <View style={styles.container}>
            <RectButton
                style={styles.cardButton}
                {...rest}
            >
                <Text
                    style={styles.textCard}
                >
                    {title}
                </Text>   

                <Image 
                    style={styles.CardImage}
                    source={{ uri: thumbnail}}
                    resizeMode="contain"
            
                /> 
            </RectButton>            
        </View>
    )
    
}