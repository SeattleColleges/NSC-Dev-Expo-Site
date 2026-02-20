import { View, Text, Pressable, StyleSheet } from "react-native";
import { Link } from "expo-router";
import HamburgerButton from "./HamburgerButton";

export default function Navbar() {
    return(
        <View style={styles.container}>
            <Text style={styles.logo}>LOGO</Text>
            <HamburgerButton onPress={() => {}}/>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});