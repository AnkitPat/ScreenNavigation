import {StyleSheet} from "react-native";


const textStyle = StyleSheet.create({
    text: {
        fontSize: 22,
        marginBottom: 20
    },
    bold: {
        fontWeight: 'bold'
    }, thin: {
        fontWeight: '200'
    },
    italic: {
        fontStyle: 'italic'
    },
    moreLineHeight: {
        lineHeight: 40
    },
    right: {
        textAlign: 'right'
    }, center: {
        textAlign: 'center'
    },
    code: {
        fontFamily: 'Courier'
    } });

export default textStyle;