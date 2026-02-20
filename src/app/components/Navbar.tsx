import { View, Text, Pressable, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { useState } from "react";
import HamburgerButton from "./HamburgerButton";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return(
        <>
            <View style={styles.container}>
                <View style={styles.logoBox}>
                    <Text style={styles.logo}>LOGO</Text>
                </View>
                <HamburgerButton 
                    onPress={() => setMenuOpen(!menuOpen)}
                />
            </View>

            {menuOpen && (
                <View style={styles.dropdown}>
                    <Text>Home</Text>
                    <Text>Contact</Text>
                    <Text>People</Text>
                    <Text>Projects</Text>
                    <Text>Donate</Text>
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
    logoBox: {
        backgroundColor: "#525252",
    },
    logo: {
        color:"#fff",
        fontSize: 18,
    },
    dropdown: {
        backgroundColor: '#fff',
        padding: 20,
        borderBottomWidth: 1,
        borderColor: '#eee',
    },
});