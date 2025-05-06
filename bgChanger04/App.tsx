import React, {useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function App(): React.JSX.Element {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');

  const generateColor = () => {
    const hexRange = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }
    setBackgroundColor(color);
  };
  return (
    <>
      <StatusBar backgroundColor={backgroundColor} />
      <View style={[styles.container, {backgroundColor: backgroundColor}]}>
        <TouchableOpacity onPress={generateColor}>
          <View style={styles.actionButton}>
            <Text style={styles.actionButtonTxt}>Press me!!</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionButton: {
    borderRadius: 4,
    backgroundColor: '#487EB0',
    paddingVertical: 20,
    paddingHorizontal: 40,
  },
  actionButtonTxt: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
});

export default App;
