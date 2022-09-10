import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import colors  from './src/utils/colors.js';
import Form from './src/components/Form';
import Footer from './src/components/Footer';
import Result from './src/components/Result';

export default function App() {

  //Hooks para almacenar datos
  const [capital, setCapital] = useState(null);
  const [interest, setInterest] = useState(null);
  const [month, setMoths] = useState(null);
  const [total, setTotal] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(()=> {
    if(capital && interest && month) {
      calculate();
    }
    else {
      reset();
    }
  }, [capital, interest, month]);

  const calculate = () => {
    reset();
    if(!capital) {
      setErrorMessage('Añade la cantidad que quieres solicitar');
    } else if(!interest) {
      setErrorMessage('Añade el interes del prestamos');
    }else if (!month) {
      setErrorMessage('Seleccióna los meses a pagar');
      } else {
          const i = interest / 100;
          const fee = capital / ((1 - Math.pow(i + 1, -month)) / i);
          setTotal({
          monthlyFee: fee.toFixed(2).replace('.', ','),
          totalPayable: (fee * month).toFixed(2).replace('.', ','),
      });
    };
  }
  const reset = () => {
    setErrorMessage('');
    setTotal(null);
    };
  
  return (
    <>
    <StatusBar barStyle="light-content"/>
    <SafeAreaView style={styles.Header}>
    <View style={styles.background}/>
      <Text style={styles.HeadApp}>Cotizador de Préstamos</Text>
      <Form
        setCapital={setCapital}
        setInterest={setInterest}
        setMoths={setMoths}
      />
    </SafeAreaView>
    <Result 
    capital={capital} 
    interest={interest} 
    month={month} 
    total={total} 
    errorMessage={errorMessage}
    />
    <Footer calculate={calculate}/>
    </>
  );
}


const styles = StyleSheet.create({
  Header: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center'
  },
  HeadApp: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FFF',
    marginTop: 5,
  },
  background: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    width: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: 'absolute',
    zIndex: -1,
  } 
});
