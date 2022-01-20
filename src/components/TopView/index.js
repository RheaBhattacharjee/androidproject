import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

//components
import RheaInput from '../CustomTextInput';

export default function TopView(){
  let text = "Hello"

    return (
    <View style={styles.container}>
      <Text style={{color: '#000'}}>{text}</Text>
      <Image
        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
        }}
        style={{width: 200, height: 200}}
      />
      <RheaInput placeholder="Input in Top View..."/>
    </View>
    );
    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    container2: {
      backgroundColor: 'green'
    },
    text1: {
      color: 'blue'
    }
  });