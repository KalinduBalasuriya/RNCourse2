import { Text, StyleSheet } from "react-native";
// import { Colors } from "react-native/Libraries/NewAppScreen";
import Colors from "../../constants/colors";

function Title({children,style}){
    return <Text style={[styles.title, style]}>{children}</Text>;
   
}

export default Title;

const styles =StyleSheet.create({

    title:{
        fontFamily:'open-sans-bold',
        fontSize:24,
        // fontWeight:'bold',
        color: Colors.accent500,
        textAlign:'center',
        borderWidth:2,
        padding:12,
        borderColor:Colors.accent500,
        maxWidth:'80%',
        Width:300

        
    }
});
    
        

