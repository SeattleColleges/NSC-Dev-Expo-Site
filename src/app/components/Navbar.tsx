import { View, Text, Pressable, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { useState } from "react";
import HamburgerButton from "./HamburgerButton";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

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
                    <View style={styles.dropdownCategory}>
                        <Text style={styles.dropdownText}>About</Text>
                        <MaterialIcons name="keyboard-arrow-up" size={56} color="black" />
                    </View>
                    <View style={styles.dropdownCategory}>
                        <Text style={styles.dropdownText}>Contact</Text>
                        <MaterialIcons name="keyboard-arrow-up" size={56} color="black" />
                    </View>
                    <View style={styles.dropdownCategory}>
                        <Text style={styles.dropdownText}>People</Text>
                        <MaterialIcons name="keyboard-arrow-up" size={56} color="black" />
                    </View>
                    <View style={styles.dropdownCategory}>
                        <Text style={styles.dropdownText}>Projects</Text>
                        <MaterialIcons name="keyboard-arrow-up" size={56} color="black" />
                    </View>                    <View style={styles.dropdownCategory}>
                        <Text style={styles.dropdownText}>Donate</Text>
                        <MaterialIcons name="keyboard-arrow-up" size={56} color="black" />
                    </View>
                </View>
            )}
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        margin: 8,
        paddingLeft: 12
    },
    logoBox: {
        backgroundColor: "#525252",
        width: 65,
        height: 65,
        justifyContent: "center"
    },
    logo: {
        color:"#fff",
        fontSize: 20,
        alignSelf: "center"
    },
    dropdown: {
        backgroundColor: "#383838",
        padding: 20,
        borderBottomWidth: 1,
        borderColor: '#eee',
    },
    dropdownText: {
        fontSize: 48,
        color: "#DDD"
    },
    dropdownCategory: {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        gap: 4
    }
});