import React from 'react'
import { 
    View, 
    Text,
    Image,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'

import ilustration from '../../assets/ilustration.png'
import { ButtonIcon } from '../../components/ButtonIcon'
import { styles } from './styles'

export function SingIn() {
    const navigation = useNavigation();
    
    //função para a navegação das telas 
    function handleCadastro(){
        navigation.navigate('Cadastro')
    }

    return(
        <View style={styles.container}>
            <Image 
                source={ilustration}
                style={styles.image}
                resizeMode="stretch"
            />

            <View style={styles.content}>
                <Text style={styles.title}>
                    Me Contrata AÊ
                </Text>

                <Text style={styles.subtitle}>
                    Contrate os Melhores profissionais {'\n'} 
                    autônomos e liberais pagando o melhor preço
                </Text>

                <ButtonIcon 
                    title="Entrar"
                    onPress={handleCadastro} //direciona quando o botão é clicado
                />

               

            </View>
        </View>

    )
}