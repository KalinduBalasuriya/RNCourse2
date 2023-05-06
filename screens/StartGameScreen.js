import { useState } from "react";
import { TextInput, View, StyleSheet, Alert, Text } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/Card";
import InstructionText from "../components/InstructionText";


function StartGameScreen({ onPickNumber }) {
    const [enteredNumber, setEnteredNumber] = useState('');


    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText);
    }

    function resetHandler() {
        setEnteredNumber('');
    }

    function confirmInputHandler() {
        const choosenNumber = parseInt(enteredNumber);

        if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
            Alert.alert(
                'Invalid Number',
                'Has to be a Number between1 and 99.',
                [{ text: 'Okay', style: "destructive", onPress: resetHandler }]);
            return;
        }
        onPickNumber(choosenNumber);
    }

    return (
        <View style={styles.rootContainer}>
            <Title >Guess My Number</Title>
            <Card>
                <InstructionText >Enter a number</InstructionText>
                <TextInput
                    style={styles.numberInput}
                    maxLength={2}
                    keyboardType="number-pad"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={numberInputHandler}
                    value={enteredNumber}
                />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onTap={resetHandler} > Reset </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onTap={confirmInputHandler} >Confirm</PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({

    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: "center",
    },
    numberInput: {
        fontFamily:'OpenSans-bold',
        height: 50,
        width: 50,
        textAlign: 'center',
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: "bold",
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    }
})

    
    