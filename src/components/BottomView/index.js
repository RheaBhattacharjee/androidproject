import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

//components
import RheaInput from '../CustomTextInput';

export default function BottomView(){
    return (
    <View style={styles.container}>
      <Text style={{color: '#fff'}}>Hi my name is Rhea Bhattacharjee and this is my first app</Text>
      <Image
        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
        }}
        style={{width: 200, height: 200}}
      />
      <RheaInput placeholder="Input in Bottom View..." placeholderColor="#fff"/>
      <Button
  onPress={onPressLearnMore}
  title="Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
    </View>
    );
    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
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