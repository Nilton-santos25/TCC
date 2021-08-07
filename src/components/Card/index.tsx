import React from 'react';
import { View, Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { styles } from './styles'

// type Props = RectButtonProps & {
//     title: string;
// }

interface Props {
    
};


export function Card(){
    return(
        <View>
            <View style={styles.container}> 
                <Text>Pedreiros</Text>
            </View>

            <View style={styles.CardImage}>
            
            </View>

        </View>

       
    )
}

// export function Card({title, ...rest}: Props){
//     return(
//         <View style={styles.container}>
//             <RectButton
//                 style={styles.cardButton}
//                 {...rest}
//             >
//                 <Text
//                     style={styles.textCard}
//                 >
//                     {title}
//                 </Text>    
//             </RectButton>
//         </View>
//     )
    
// }