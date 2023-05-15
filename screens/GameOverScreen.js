import { View, Image, Dimensions, useWindowDimensions, ScrollView } from "react-native";
import { Text, StyleSheet } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame, }) {


    const { width, height } = useWindowDimensions();

    // if (width < 380) {
    //     imageSize = 150;
    // }

    // if (height < 400) {
    //     imageSize = 80;
    // }

    // const imageStyle = {
    //     width: imageSize,
    //     width: imageSize,
    //     borderRadius: imageSize / 2
    // }

    return (
        <ScrollView style={styles.screen}>
            <View style={styles.rootContainer}>
                <Title style={styles.title}>GAME OVER</Title>
                <View style={[styles.imageContainer, ]}>
                    <Image style={styles.image} source={require('../assets/success.png')} />
                </View>
                <Text style={styles.summaryText}>
                    Your phone needed<Text style={styles.highlight}> {roundsNumber}</Text> times to
                    guess the number <Text style={styles.highlight}>{userNumber}</Text>
                </Text>
                <PrimaryButton onTap={onStartNewGame}>Start New Game</PrimaryButton>
            </View>
        </ScrollView>
    )
}
export default GameOverScreen;
// const deviceWidth = Dimensions.get('window').width;



const styles = StyleSheet.create({

    screen: {
        flex: 1
    },

    highlight: {
        fontFamily: 'open-sans-bold',
        color: Colors.primary500,
    },
    rootContainer: {
        flex: 1,
        padding: 24,

        justifyContent: 'center',
        alignItems: 'center',
    },
    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center',
        marginVertical: 24,
    },
    imageContainer: {
        // width: deviceWidth < 380 ? 150 :300,
        // height: deviceWidth < 380 ? 150 :300,
        // borderRadius: deviceWidth < 380 ? 75 :150,
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



