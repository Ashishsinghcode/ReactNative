import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Alert,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import Test from './componenets/test';
import * as Yup from 'yup';
import {Formik} from 'formik';
import BouncyCheckBox from 'react-native-bouncy-checkbox';
import Clipboard from '@react-native-clipboard/clipboard';
import {ToastAndroid} from 'react-native';

const passwordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .required('Length is required')
    .min(4, 'Should be min of 4 characters')
    .max(16, 'Cannot larger than 16 Charcters'),
});
const App = () => {
  const [password, setPassword] = useState('');
  const [isPasswordGenerated, setIsPasswordGenerated] = useState(false);
  const [upperCase, setUpperCase] = useState(true);
  const [lowerCase, setLowerCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const copyToClipboard = () => {
    Clipboard.setString(password);
    ToastAndroid.show('Copied to clipboard', ToastAndroid.SHORT);
  };

  const generatepasswordString = (passwordlength: number) => {
    let characterList = '';
    const upperCaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseCharacters = 'abcdefghijklmnopqrstuvwxyz';
    const digitChars = '0123456789';
    const symbolsChars = '!@#$%^&*()_+';

    if (upperCase) {
      characterList += upperCaseCharacters;
    }
    if (lowerCase) {
      characterList += lowerCaseCharacters;
    }
    if (numbers) {
      characterList += digitChars;
    }
    if (symbols) {
      characterList += symbolsChars;
    }

    const passwordResult = createpassword(characterList, passwordlength);

    setPassword(passwordResult);
    setIsPasswordGenerated(true);
  };

  const createpassword = (characters: string, passwordlength: number) => {
    let result = '';
    for (let i = 0; i < passwordlength; i++) {
      let characterIndex = Math.round(Math.random() * characters.length);
      result += characters.charAt(characterIndex);
    }
    return result;
  };

  const resetPassword = () => {
    setPassword('');
    setIsPasswordGenerated(false);
    setLowerCase(true);
    setUpperCase(false);
    setNumbers(false);
    setSymbols(false);
  };

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Password Generator</Text>
          <Formik
            initialValues={{passwordLength: ''}}
            validationSchema={passwordSchema}
            validateOnSubmit={true}
            onSubmit={values => {
              console.log(values);
              generatepasswordString(+values.passwordLength); //+ converts the datatype to number
            }}>
            {({
              values,
              errors,
              touched,
              isValid,
              handleChange,
              handleSubmit,
              handleReset,

              /* and other goodies */
            }) => (
              <>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Password Length</Text>
                  <View style={styles.inputColumn}>
                    <TextInput
                      style={styles.inputStyle}
                      value={values.passwordLength}
                      onChangeText={handleChange('passwordLength')}
                      placeholder="Ex. 8"
                      keyboardType="numeric"
                    />
                    {touched.passwordLength && errors.passwordLength && (
                      <Text style={styles.errorText}>
                        {errors.passwordLength}
                      </Text>
                    )}
                  </View>
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include uppercase</Text>
                  <View style={styles.bouncyWrapper}>
                    <BouncyCheckBox
                      useBuiltInState={false}
                      isChecked={upperCase}
                      onPress={() => setUpperCase(!upperCase)}
                      fillColor="#00CCCD"
                    />
                  </View>
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include lowercase</Text>
                  <View style={styles.bouncyWrapper}>
                    <BouncyCheckBox
                      isChecked={lowerCase}
                      onPress={() => setLowerCase(!lowerCase)}
                      fillColor="#29AB87"
                    />
                  </View>
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include numbers</Text>
                  <View style={styles.bouncyWrapper}>
                    <BouncyCheckBox
                      isChecked={numbers}
                      onPress={() => setNumbers(!numbers)}
                      fillColor="#F5BCBA"
                    />
                  </View>
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include symbols</Text>
                  <View style={styles.bouncyWrapper}>
                    <BouncyCheckBox
                      isChecked={symbols}
                      onPress={() => setSymbols(!symbols)}
                      fillColor="#FFF222"
                    />
                  </View>
                </View>

                <View style={styles.formActions}>
                  <TouchableOpacity
                    style={styles.primaryButton}
                    onPress={() => handleSubmit()}>
                    <Text style={styles.primaryBtnTxt}>Generate Password</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.secondaryButton}
                    onPress={() => {
                      handleReset();
                      resetPassword();
                    }}>
                    <Text style={styles.secondayBtnTxt}>Reset</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
        </View>
        {isPasswordGenerated ? (
          <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.subTitle}>Result: </Text>
            <Text style={styles.description}>Long press to copy</Text>
            <TouchableOpacity onLongPress={copyToClipboard}>
              <Text style={styles.generatedPassword} selectable={true}>
                {password}
              </Text>
            </TouchableOpacity>
          </View>
        ) : null}
      </SafeAreaView>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  appContainer: {
    width: '100%',
    height: 380,
    borderWidth: 5,
    padding: 10,
  },
  formContainer: {
    width: '100%',
    height: 380,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
  heading: {
    color: 'white',
    fontSize: 15,
  },
  errorText: {
    fontSize: 10,
    color: 'red',
  },
  bouncyWrapper: {},
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  inputColumn: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  formActions: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  inputStyle: {
    width: 80,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    color:'white'
  },
  primaryButton: {
    height: 40,
    width: 150,
    backgroundColor: '#67E6DC',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  primaryBtnTxt: {
    fontWeight: '600',
    color: 'green',
  },
  secondaryButton: {
    height: 40,
    width: 150,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  secondayBtnTxt: {
    fontWeight: '600',
    color: 'red',
  },
  card: {
    height: 100,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  cardElevated: {
    elevation: 10,
    backgroundColor: 'white',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: 'green',
    shadowRadius: 50,
  },
  subTitle: {
    fontSize: 30,
    fontWeight: '600',
  },
  description: {
    fontSize: 10,
  },
  generatedPassword: {
    fontSize: 30,
  },
});

export default App;
