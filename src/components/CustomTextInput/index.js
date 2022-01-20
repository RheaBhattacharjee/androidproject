import React from 'react';
import {TextInput} from 'react-native';

export default function RheaInput(props){
    return(
        <>
            <TextInput placeholder={props.placeholder} style={{backgroundColor: props.placeholderColor}}/>
        </>
    )
}