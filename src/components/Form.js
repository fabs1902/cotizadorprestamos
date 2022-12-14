import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import RNPickerSelect from 'react-native-picker-select';
import colors from '../utils/colors.js';


export default function From(props) {
    //Desestructuración 
    const {setCapital, setInterest, setMoths} = props;
    return (
        <View style= {styles.viewForm}>
            <View style={styles.viewInputs}>
                <TextInput placeholder="Cantidad a pedir" keyboardType="numeric" 
                style={styles.input} onChange={(e) => setCapital(e.nativeEvent.text)}/>
                <TextInput placeholder="Interes %" keyboardType="numeric"
                style={[styles.input, styles.inputPercentage]} onChange={(e)=> setInterest(e.nativeEvent.text)}
                />
            </View>
            <RNPickerSelect style={picketSelectStyles} 
           // onValueChange={(value)=> setMoths(value)}             
           onValueChange={(value)=> setMoths(value)}             
            placeholder={{
                label: 'Selecciona los plazos...',
                value: null,
            }} 
            items={[
                {label:'3 meses', value:3},
                {label:'6 meses', value:6},
                {label:'12 meses', value:12},
                {label:'24 meses', value:24},
            ]} />
        </View>
    );
}

const styles = StyleSheet.create({
    viewForm: {
      position:'absolute',
      bottom:0,
      width:'85%',
      paddingHorizontal:50,
      backgroundColor: colors.PRIMARI_COLOR,
      borderRadius:30,
      height:180,
      justifyContent:'center',
    },
    viewInputs: {
      flexDirection:'row',
    },
    input: {
        height:50,
        backgroundColor:'#FFF',
        borderRadius:5,
        width:'60%',
        marginRight:5,
        marginLeft:-5,
        marginBottom:10,
        color:'#000',
        paddingHorizontal:20,
    },
    inputPercentage: {
        width:'40%',
        marginLeft:5,
    },
  });

  const picketSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize:16,
        paddingVertical:12,
        paddingHorizontal:10,
        borderWidth:1,
        borderColor:'grey',
        borderRadius:4,
        color: 'black',
        paddingRight:30,
        backgroundColor:'#FFF',
        marginLeft:-5,
        marginRight:-5,
    },
    inputAndroid: {
        fontSize:16,
        paddingHorizontal:10,
        paddingVertical:8,
        borderWidth:0.5,
        borderColor:'grey',
        borderRadius:8,
        color:'black',
        paddingRight:30,
        backgroundColor:'#FFF',
    },
  })