import { View, Text, Pressable, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { useState } from "react";
import HamburgerButton from "./HamburgerButton";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return(
        <>
            <View style={styles.container}>
                <Text style={styles.logo}>LOGO</Text>
                <HamburgerButton 
                    onPress={() => setMenuOpen(!menuOpen)}
                />
            </View>

            {menuOpen && (
                <View style={styles.dropdown}>
                    <Text>Home</Text>
                    <Text>About</Text>
                    <Text>Contact</Text>
                    <Text>Student</Text>
                </View>
            )}
        </>
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
  dropdown: {
    backgroundColor: '#fff',
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#eee',
    },
});