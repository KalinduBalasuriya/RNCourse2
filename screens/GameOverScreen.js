import { View, Image } from "react-native";
import { Text, StyleSheet } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {

    
    
    return (
        <View style={styles.rootContainer}>
            <Title style={styles.title}>GAME OVER</Title>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../assets/success.png')} />
            </View>
            <Text style={styles.summaryText}>
            Your phone needed<Text style={styles.highlight}> {roundsNumber}</Text> times to 
            guess the number <Text style={styles.highlight}>{userNumber}</Text>
            </Text>
            <PrimaryButton onTap={onStartNewGame}>Start New Game</PrimaryButton>
        </View>

    )
}
export default GameOverScreen;

const styles = StyleSheet.create({
    highlight: {
        fontFamily:'open-sans-bold',
        color:Colors.primary500,
    },
    rootContainer: {
        flex:1,
        padding: 24,
        
        justifyContent: 'center',
        alignItems: 'center',
    },
    summaryText:{
       fontFamily:'open-sans',
       fontSize:24,
       textAlign:'center',
       marginVertical:24, 
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 200,
        borderWidth: 3,
        borderColor: Colors.primary700,
        overflow: 'hidden',
        margin: 36,
    },
    image: {
        width: "100%",
        height: "100%",
    }
})



