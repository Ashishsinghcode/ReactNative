import React, {useState} from 'react';
import type {JSX, PropsWithChildren} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
} from 'react-native';
import {currencyByRupee} from './constants';
import Snackbar from 'react-native-snackbar';
import CurrencyButton from './components/currencyButton';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): JSX.Element {
  const [inputValue, setInputValue] = useState('');
  const [resultvalue, setResultValue] = useState('');
  const [targetCurrency, setTargetCurrency] = useState('');

  const buttonPressed = (targetValue: Currency) => {
    if (!inputValue) {
      return Snackbar.show({
        text: 'Enter a value to convert',
        backgroundColor: '#EA7773',
        textColor: '#000000',
      });
    }

    const inputAmount = parseFloat(inputValue);
    if (!isNaN(inputAmount)) {
      const convertedValue = inputAmount * targetValue.value;
      let result = `${targetValue.symbol} ${convertedValue.toFixed(2)}`;
      setResultValue(result);
      setTargetCurrency(targetValue.name);
    } else {
      return Snackbar.show({
        text: 'Not a valid number to convert',
        backgroundColor: '#F4BE2C',
        textColor: '#000000',
      });
    }
  };
  return (
    <SafeAreaView>
      <StatusBar />
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.rupeeContainer}>
            <Text style={styles.rupee}>₹</Text>
            <TextInput
              style={styles.inputBox}
              maxLength={14}
              value={inputValue}
              clearButtonMode="always"
              placeholder="Enter amount in rupees"
              onChangeText={setInputValue}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.resultBox}>
            {resultvalue && <Text style={styles.resultTxt}>{resultvalue}</Text>}
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <FlatList
            numColumns={3}
            data={currencyByRupee}
            keyExtractor={item => item.name}
            renderItem={({item}) => (
              <Pressable
                style={[
                  styles.button,
                  targetCurrency === item.name && styles.selected,
                ]}
                onPress={() => buttonPressed(item)}>
                <CurrencyButton {...item} />
              </Pressable>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#d1d1d1',
    width: '100%',
    height: 400,
    alignItems: 'center',
    justifyContent: 'space-between',
    // marginTop:10,
    borderWidth: 4,
    borderColor: 'red',
    borderRadius: 8,
  },
  topContainer: {
    height: 130,
    // flex:1,
    // justifyContent:'center',
    // alignItems:'center'
  },
  rupeeContainer: {
    // flex:1,
    flexDirection: 'row',
    // justifyContent:'center',
    // alignItems:'center',
    marginTop: 30,
  },
  rupee: {
    fontSize: 20,
    marginRight: 8,
  },
  inputBox: {
    borderWidth: 1,
    width: 160,
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultBox: {
    marginVertical: 10,
    marginLeft: 18,
    backgroundColor: 'white',
    borderRadius: 5,
    width: 160,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultTxt:{
    fontSize:20,
  },
  bottomContainer: {
    // justifyContent:'center',
    // alignItems:'center',
  },
  button: {
    borderWidth: 1,
    borderRadius: 5,
    height: 60,
    width: 110,
    margin: 8,
  },
  selected: {
    backgroundColor: '#FBD28B',
  },
});
export default App;
