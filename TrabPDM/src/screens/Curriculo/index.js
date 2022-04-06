import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

import lego from '../../../assets/Logo.png';
import Icon from 'react-native-vector-icons/Feather';

import { Card } from '../../Components/Card/Index';


export function Curriculo() {
  return (
    <View style={styles.container}>
      <View style={styles.container_cabecalho}>
        <Image source={lego} style={styles.image_perfil} />
        <Text style={styles.nome}> Empresa DimondTech </Text>
        <Text style={styles.funcao}> "Gabriel, Gustavo e Vitor" </Text>

        
      </View>

      <View style={styles.redes_sociais}>
        <Icon name="instagram" size={30} />
        <Icon name="twitter" size={30} />
        <Icon name="facebook" size={30} />
      </View>

      <Card />
      

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  image_perfil: {
    width: 200,
    height: 200,
    borderRadius: 150,
  },
  nome: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  funcao: {
    color: '#939393',
    fontSize: 16,
    textAlign: 'center',
  },
  redes_sociais: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});