import React from 'react';
import {View, Image, TouchableOpacity, Text, Linking} from 'react-native';
import {Feather} from '@expo/vector-icons';
import {useNavigation, useRoute} from '@react-navigation/native';
import styles from './styles';
import * as MailComposer from 'expo-mail-composer';


import logoImg from '../../assets/logo.png';

export default function Detail(){
    const navigation = useNavigation();
    const message = 'Olá APAD, estou entrado em contacto pois gostaria de ajudar com R$ 120,00';

    const route = useRoute();
    const incident = route.params.incident;

    function navigateBack(){
        navigation.navigate('Incident');
    }

    function sendMail(){
        MailComposer.composeAsync({
            subject: 'Heroi do caso: cadelinha atropelada',
            recipients: ['adilsonfuxe.fuxe@gmail.com'],
            body: message,
        })
    }

    function sendWhatsapp(){
        Linking.openURL(`whatsapp://send?phone=888888888&text=${message}`);
    }



    return(
        <View style={styles.container} >
            <View style={styles.header}>
               <Image source={logoImg}/>
              
              <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color='#E82041'/>
              </TouchableOpacity>
            </View>
                <View style={styles.incident}>
                    <Text style={[styles.incidentProperty, {marginTop:0}]}>ONG:</Text>
                    <Text style={styles.incidentValue}>{incident.name}</Text>

                    <Text style={styles.incidentProperty}>CASO:</Text>
                    <Text style={styles.incidentValue}>{incident.title}</Text>

                    <Text style={styles.incidentProperty}>Valor:</Text>
                    <Text style={styles.incidentValue}> {Intl.NumberFormat('pt-AO',
                                {style:'currency', currency:'AOA'})
                                .format(incident.value)}</Text>
                </View>

                <View style={styles.contactBox}>
                    <Text style={styles.heroTitle}>Salve o dia</Text> 
                    <Text style={styles.heroTitle}>Seja o heroi desse caso.</Text> 

                    <Text style={styles.heroDescription}>Entre em contaco</Text>

                    <View style={styles.actions}>
                        <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                            <Text style={styles.actionText}>Whatsapp</Text>
                        </TouchableOpacity>
                  
                        <TouchableOpacity style={styles.action} onPress={sendMail}>
                            <Text style={styles.actionText}>E-mail</Text>
                        </TouchableOpacity>
                    </View>
                  
                </View>

           
        </View>
    );
}