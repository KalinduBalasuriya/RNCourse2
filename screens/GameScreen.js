import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert, SafeAreaView, FlatList, } from 'react-native';
import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/Card';
import InstructionText from '../components/InstructionText';
import { Ionicons } from '@expo/vector-icons'
import Colors from '../constants/colors';
import GuessLogItem from '../components/game/GuessLogItem';

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }


}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver, passGuessRounds }) {
    const initialGuess = generateRandomBetween(1, 100, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessRounds, setGuessRounds] = useState([initialGuess]);

    console.log('initialGuess - ' + initialGuess);
    console.log('currentGuess - ' + currentGuess);

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver();
            passGuessRounds(guessRounds);
        }
    }, [currentGuess, userNumber, onGameOver]);

    useEffect(() => {
        minBoundary=1;
        maxBoundary=100;
     }, []);

    function nextGuessHandler(direction) {

        if (
            (direction === 'lower' && currentGuess < userNumber) ||
            (direction === 'greater' && currentGuess > userNumber)) {
            Alert.alert("Don't lie!", "You know that this is wrong...", [
                { text: 'Sorry', style: 'cancel' }
            ]);
            return;
        }

        if (direction === 'lower') {
            maxBoundary = currentGuess;
        } else
            minBoundary = currentGuess + 1;

        newRndNum = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNum);
        setGuessRounds((prevGuessRounds) => [...prevGuessRounds, newRndNum]);

        console.log(minBoundary, maxBoundary);
        console.log('new random - ' + newRndNum);
        console.log('initialGuess at last is ' + initialGuess);
        console.log('currentGuess at last is ' + currentGuess);
    }

    const guessRoundsListLength = guessRounds.length;

    return (

        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionText style={styles.instructionText}>Higher or lower?</InstructionText>
                <View style={styles.buttonsContainer}>

                    <View style={styles.buttonContainer}>
                        <PrimaryButton onTap={nextGuessHandler.bind(this, 'lower')}>
                            <Ionicons name="remove-circle" size={24} color="#ddb52f" />
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onTap={nextGuessHandler.bind(this, 'greater')}>
                            <Ionicons name="add-circle" size={24} color="#ddb52f" />
                        </PrimaryButton>
                    </View>

                </View>
            </Card>
            <View style={styles.lisrContainer}>
                <FlatList
                    data={guessRounds}
                    renderItem={(itemData) => (
                        <GuessLogItem
                            roundNumber={guessRoundsListLength - itemData.index}
                            guess={itemData.item}
                        />
                    )}
                    keyExtractor={(item) => item}
                />
            </View>
            {/* <View>LOG ROUNDS</View> */}
        </View>

    );
}
export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: 36,
        paddingHorizontal: 25,
        alignItems:'center'
    },
    instructionText: {
        fontFamily: 'open-sans',
        marginBottom: 12,
    },

    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    },
    lisrContainer:{
      flex:1,
      padding:16,
    },
});







