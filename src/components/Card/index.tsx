import React from 'react';
import { View, Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { styles } from './styles'

type Props = RectButtonProps & {
    title: string;
}

export function Card({title, ...rest}: Props){
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
            </RectButton>
        </View>
    )
    
}