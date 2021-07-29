import React from 'react';
import { ScrollView, Text, View } from 'react-native'; // é usada para ativar rolagem 
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { styles } from './styles';
import { categories } from '../../Utils/categories';
import { Card } from '../Card';

export function CardCategory(){
    return(
            <ScrollView
                style={styles.container}  
                showsHorizontalScrollIndicator={true}  
                contentContainerStyle={{ paddingRight: 20 }}
            >
                <Card title='Pedreiros'/>
                <Card title='Encanadores'/>
                <Card title='Eletricistas'/>
                <Card title='Pintores'/>
                <Card title='Engenheiros'/>
                <Card title='Arquitetos'/>
                <Card title='Dentistas'/>
                <Card title='Médicos'/>
                <Card title='Dermatologistas'/>  
            </ScrollView>
    )
}