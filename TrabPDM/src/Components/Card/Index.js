import * as React from 'react';
import { 
  Text, 
  View, 
  StyleSheet,
  Image
  } from 'react-native';



export function Card() {
  return (
   <View style={styles.card}> 
      <Text style={styles.card_title}> Experiência Profissional </Text>
      <Text> Não temos, mas vamos ter</Text>
    </View>

    
  );
}

const styles = StyleSheet.create({
  card: {
    width:'60%',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#939393',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor:'#FFF'
  },
  card_title:{
    fontWeight: 'bold'
  }
});