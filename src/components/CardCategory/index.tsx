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
                <Card title='Pedreiros' thumbnail="https://img.ibxk.com.br/2014/2/programas/8477510112640523.png"/>
                <Card title='Encanadores' thumbnail="https://static.wixstatic.com/media/17e51c_a5aeaefb2b3148f6af78c52ed257a17e~mv2.png/v1/crop/x_0,y_0,w_360,h_480,q_85,usm_2.00_1.00_0.00/17e51c_a5aeaefb2b3148f6af78c52ed257a17e~mv2.webp"/>
                <Card title='Eletricistas' thumbnail="https://cdn.pixabay.com/photo/2018/04/11/02/44/electrician-3309404_960_720.png"/>
                <Card title='Pintores' thumbnail="https://www.seekpng.com/png/full/293-2937178_pintor-png-imagem-de-pintor-png.png"/>
                <Card title='Engenheiros' thumbnail="https://lh3.googleusercontent.com/proxy/I7i6JaVUOKPOQ5Q9KpCZmlqNuYCYvXy1p9EgL_S7HtT3RA3moCZ0tgfCzQ_HD-AUB2zcV-fSPi8pgf3a89SLNRGe3wXDCVpfIa_9y9Kmtapgputl"/>
                <Card title='Arquitetos' thumbnail="https://image.flaticon.com/icons/png/512/2132/2132752.png"/>
                <Card title='Dentistas' thumbnail="https://www.iro.com.br/site/wp-content/uploads/2020/06/dentista.png"/>
                <Card title='Médicos' thumbnail="https://missaocovid.com.br/static/media/sectipn-one.a7795d40.png"/>
                <Card title='Dermatologistas' thumbnail="https://lh3.googleusercontent.com/proxy/S7E6RiPcwXUaBOvpqr1fDIEVCyNStG9gAsMGQJQuyz9I_Al-Ld_-Th4F077e5Z7hwGt6geaZIKx_n9YZHh7hTlEhk7QYsT-aRvE18vr_C3cwlVl6r-gXokiaelqzfUrLvcym"/>  
                <Card title='Manicure' thumbnail="https://florescerespaco.com.br/wp-content/uploads/2020/08/img-manicure.png"/>  

            </ScrollView>
    )
}