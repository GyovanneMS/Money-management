import React from "react";
import { View } from "react-native";
import styles from "../styles/Janela";

export default function Janela(props){
    return <View style={ styles.janela }>
        { props.children }
    </View>
}