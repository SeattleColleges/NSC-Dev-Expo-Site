import { View, Text, Pressable, StyleSheet } from "react-native";
import { Link } from "expo-router";
import HamburgerButton from "./HamburgerButton";
export default function Navbar() {
    return(
        <View style={styles.container}>
            <Text style={styles.logo}>LOGO</Text>
            {/* <View>
                <Link href="/" asChild>
                    <Pressable>
                        <Text>LOGO</Text>
                    </Pressable>
                </Link>
                <Link href="/about" asChild>
                    <Pressable>
                        <Text>About</Text>
                    </Pressable>
                </Link>
            </View> */}
            <HamburgerButton />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {},
});