import { View, Text, Pressable, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import HamburgerButton from "./HamburgerButton";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [aboutOpen, setAboutOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [peopleOpen, setPeopleOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) {
      setAboutOpen(false);
      setContactOpen(false);
      setPeopleOpen(false);
      setProjectsOpen(false);
    }
  }, [menuOpen]);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.logoBox}>
          <Text style={styles.logo}>LOGO</Text>
        </View>

        <HamburgerButton onPress={() => setMenuOpen(!menuOpen)} />
      </View>

      {menuOpen && (
        <View style={styles.dropdown}>
          <Pressable onPress={() => setAboutOpen(!aboutOpen)}>
            <View style={styles.dropdownCategory}>
              <Text style={styles.dropdownText}>About</Text>
              <MaterialIcons
                name={aboutOpen ? "keyboard-arrow-up" : "keyboard-arrow-down"}
                size={28}
                color="#DDD"
              />
            </View>
          </Pressable>

          {aboutOpen && (
            <View style={styles.subMenu}>
              <Text style={styles.row}>About Us</Text>
              <Text style={styles.row}>Our Design Process</Text>
              <Text style={styles.row}>North Seattle College</Text>
            </View>
          )}

          <Pressable onPress={() => setContactOpen(!contactOpen)}>
            <View style={styles.dropdownCategory}>
              <Text style={styles.dropdownText}>Contact</Text>
              <MaterialIcons
                name={contactOpen ? "keyboard-arrow-up" : "keyboard-arrow-down"}
                size={28}
                color="#DDD"
              />
            </View>
          </Pressable>

          {contactOpen && (
            <View style={styles.subMenu}>
              <Text style={styles.row}>Become a Partner</Text>
              <Text style={styles.row}>Request Student Info</Text>
            </View>
          )}

          <Pressable onPress={() => setPeopleOpen(!peopleOpen)}>
            <View style={styles.dropdownCategory}>
              <Text style={styles.dropdownText}>People</Text>
              <MaterialIcons
                name={peopleOpen ? "keyboard-arrow-up" : "keyboard-arrow-down"}
                size={28}
                color="#DDD"
              />
            </View>
          </Pressable>

          {peopleOpen && (
            <View style={styles.subMenu}>
              <Text style={styles.row}>Faculty & Staff</Text>
              <Text style={styles.row}>Students</Text>
              <Text style={styles.row}>Alumni</Text>
            </View>
          )}

          <Pressable onPress={() => setProjectsOpen(!projectsOpen)}>
            <View style={styles.dropdownCategory}>
              <Text style={styles.dropdownText}>Projects</Text>
              <MaterialIcons
                name={projectsOpen ? "keyboard-arrow-up" : "keyboard-arrow-down"}
                size={28}
                color="#DDD"
              />
            </View>
          </Pressable>

          {projectsOpen && (
            <View style={styles.subMenu}>
              <Text style={styles.row}>Current Projects</Text>
              <Text style={styles.row}>Our Portfolio</Text>
            </View>
          )}

          <View style={styles.dropdownCategory}>
            <Text style={styles.dropdownText}>Donate</Text>
            <MaterialIcons name="keyboard-arrow-down" size={28} color="#DDD" />
          </View>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    margin: 8,
    paddingLeft: 12,
    paddingRight: 8,
  },
  logoBox: {
    backgroundColor: "#525252",
    width: 65,
    height: 65,
    justifyContent: "center",
  },
  logo: {
    color: "#fff",
    fontSize: 20,
    alignSelf: "center",
  },
  dropdown: {
    backgroundColor: "#383838",
    borderTopColor: "#B3B3B3",
    borderTopWidth: 6,
    borderBottomWidth: 1,
  },
  dropdownCategory: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  dropdownText: {
    fontSize: 24,
    fontWeight: "500",
    color: "#DDD",
  },
  subMenu: {
    backgroundColor: "#B3B3B3",
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  row: {
    fontSize: 18,
    paddingVertical: 6,
    color: "#000",
  },
});