import  React, {useState} from 'react';
import { View, Text, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { Picker } from '@react-native-picker/picker';

import { ButtonIcon } from '../../components/ButtonIcon';
import { styles } from './styles'
import { Inter_500Medium } from '@expo-google-fonts/inter';

export function Cadastro(){
    const navigation = useNavigation();

    function handleHome(){
        navigation.navigate('Home')
    }
    
    let [ tipo, setTipo ] = useState('Forma de pesquisa')

    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.textCad}>
                    Cadastro de Usuário
                </Text>
            </View>

            <View>
                <View>
                    <TextInput 
                        style={styles.input}
                        placeholder="Nome"
                    />
                </View>
                

                <TextInput 
                    style={styles.input}
                    placeholder="Email" 
                />

                <View style={styles.picker}>
                    <Picker
                        selectedValue={tipo}
                        onValueChange={(item, indexItem)=> {setTipo(item)}}
                    >
                        <Picker.Item key={0} label=" Quero Contratar" value="contract" />
                        <Picker.Item key={1} label=" Quero Trabalhar" value="job" />
                    </Picker>

                </View>
                
                <TextInput 
                    style={styles.input}
                    placeholder="Senha" 
                    secureTextEntry={true}
                />

                <TextInput 
                    style={styles.input}
                    placeholder="Confirmar Senha" 
                    secureTextEntry={true}
                />  

                 <ButtonIcon
                    title='Cadastrar'
                    activeOpacity={0.8}
                    onPress={handleHome}
                 />  

            </View>
        </View>
    )
}
