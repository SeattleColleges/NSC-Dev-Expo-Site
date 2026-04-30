"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var expo_linear_gradient_1 = require("expo-linear-gradient");
var HeroCTAButton_1 = require("./HeroCTAButton");
var react_native_2 = require("react-native");
function handleJoinPress() {
    react_native_2.Alert.alert("Join Us", "Button pressed!");
}
function Hero() {
    return (React.createElement(react_native_1.View, { style: styles.hero },
        React.createElement(expo_linear_gradient_1.LinearGradient, { colors: ["#1A1A1A", "#808080"], style: styles.gradientBackground, start: { x: 0, y: 0 }, end: { x: 1, y: 0 } },
            React.createElement(react_native_1.View, { style: styles.textContainer },
                React.createElement(react_native_1.Text, { style: styles.headingText }, "North Seattle Application Development"),
                React.createElement(react_native_1.Text, { style: styles.subHeadingText }, "Developing IT students of the future"))),
        React.createElement(HeroCTAButton_1["default"], { accessibilityRole: "button", label: "Join Us", 
            //onPress={showAlert}
            onPress: handleJoinPress, style: styles.floatingButton })));
}
exports["default"] = Hero;
;
var styles = react_native_1.StyleSheet.create({
    hero: {
        backgroundColor: "white",
        paddingTop: 60
    },
    textContainer: {
        paddingLeft: 24,
        paddingVertical: 24
    },
    headingText: {
        fontSize: 36,
        color: "#E5E5E5",
        // fontFamily: "Roboto"
        fontWeight: "600",
        paddingBottom: 36
    },
    subHeadingText: {
        fontSize: 16,
        color: "#E5E5E5"
    },
    gradientBackground: {
        flex: 1,
        paddingVertical: 24
    },
    floatingButton: {
        margin: 24
    }
});
