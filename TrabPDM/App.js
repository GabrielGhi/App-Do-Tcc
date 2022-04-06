import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Button } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import {Curriculo} from './src/screens/Curriculo/index';
// import {ValoresEmpresa} from './src/screens/ValoresEmpresa/index';
import { Card } from './src/Components/Card/Index';

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Valores">
        <Drawer.Screen name="Inicio" component={Curriculo} />
        <Drawer.Screen name="Valores" component={ValoresEmpresaScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const DATA = [
  {
    id: '1',
    title: 'Missão: Criar um sistema de fácil manuseio agilizando os processos por ele utilizados.',
  },
  {
    id: '2',
    title: 'Visão: Ter nossos sistemas utilizados mundialmente, por terem uma acessibilidade fácil.',
  },
  {
    id: '3',
    title: 'Valores: Buscamos a cada dia nos superar para podermos entregarmos um produto da mais alta qualidade para nossos clientes',
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);


function ValoresEmpresaScreen ({ navigation }) {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return(
    
    <SafeAreaView style={styles.container} >
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    

    <Button onPress={() => navigation.navigate('Inicio')} title="Curriculo" Styles={{marginBottam: 1,}}/>

    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});



const Drawer = createDrawerNavigator();