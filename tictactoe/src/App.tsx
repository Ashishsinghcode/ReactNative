import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Snackbar from 'react-native-snackbar';
import Icon from './components/Icon';

function App(): React.JSX.Element {
  const [isCross, setIsCross] = useState<boolean>(false);
  const [gameWinner, setGameWinner] = useState<string>('');
  const [gameState, setGameState] = useState(Array(9).fill('empty', 0, 9));
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [winningCombo, setWinningCombo] = useState<number[] | null>(null);

  const reloadGame = () => {
    setIsCross(false);
    setGameWinner('');
    setGameState(Array(9).fill('empty', 0, 9));
    setIsDisabled(false);
    setWinningCombo(null);
  };

  const checkIsWinner = () => {
    const combos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let combo of combos) {
      const [a, b, c] = combo;
      if (
        gameState[a] !== 'empty' &&
        gameState[a] === gameState[b] &&
        gameState[b] === gameState[c]
      ) {
        console.log("win")
        setGameWinner(`${gameState[a]} won the game! 🥳`);
        setIsDisabled(true);
        setWinningCombo(combo);
      }
    }

    if (!gameState.includes('empty', 0)) {
      setGameWinner('Draw game... ⌛️');
    }
  };

  useEffect(()=>{
    if (gameWinner) {
      Snackbar.show({
        text: gameWinner,
        backgroundColor: '#000000',
        textColor: '#FFFFFF',
      })
    }
  },[gameWinner]);
  useEffect(()=>{
    checkIsWinner();
  },[gameState])

  const onChangeItem = (ItemNumber: number) => {
    if (gameState[ItemNumber] === 'empty') {
      const newGameState = [...gameState];
      newGameState[ItemNumber] = isCross ? 'cross' : 'circle';
      setGameState(newGameState);
      setIsCross(!isCross);
    } else {
      Snackbar.show({
        text: 'Position is already filled',
        backgroundColor: 'red',
        textColor: '#FFFFFF',
      });
    }
  };

  return (
    <SafeAreaView>
      <StatusBar />
      <View style={styles.statusContainer}>
        {gameWinner ? (
          <View style={[styles.playerInfo, styles.winnerInfo]}>
            <Text style={styles.winnerText}>{gameWinner}</Text>
          </View>
        ) : (
          <View
            style={[
              styles.playerInfo,
              isCross ? styles.playerX : styles.playerO,
            ]}>
            <Text style={styles.gameTurnText}>
              Player {isCross ? 'X' : 'O'}'s turn
            </Text>
          </View>
        )}
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.innerContainer}>
          <FlatList
            data={gameState}
            numColumns={3}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({item, index}) => (
              <Pressable
                disabled={isDisabled}
                style={[
                  styles.blocks,
                  winningCombo?.includes(index) && styles.winningBlock,
                ]}
                onPress={() => onChangeItem(index)}>
                <Icon name={item} />
              </Pressable>
            )}
          />
        </View>
      </View>
      <View>
        <Pressable
          style={[styles.playerInfo, styles.reloadBtn]}
          onPress={reloadGame}>
          <Text style={styles.reloadBtnTxt}>Restart game</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  statusContainer: {
    height: 150,
    width: '100%',
  },
  playerInfo: {
    height: 50,
    width: 250,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: 40,
    borderRadius: 10,
  },
  winnerInfo: {
    backgroundColor: '#BB2CD9',
  },
  winnerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  playerX: {
    backgroundColor: '#FF3031',
  },
  playerO: {
    backgroundColor: '#25CCF7',
  },
  gameTurnText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  mainContainer: {
    width: '100%',
    height: 400,
    alignItems: 'center',
  },
  innerContainer: {
    backgroundColor: 'white',
    height: 370,
    width: 360,
    borderWidth: 5,
    borderColor: 'yellow',
    borderRadius: 5,
    flexDirection: 'row',
  },
  blocks: {
    width: 120,
    height: 120,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  winningBlock: {
    backgroundColor: '#7CEC9F',
  },
  reloadBtn: {
    backgroundColor: '#99AAAB',
  },
  reloadBtnTxt: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;
