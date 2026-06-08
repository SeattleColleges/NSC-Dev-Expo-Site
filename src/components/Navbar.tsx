import { View, Text, Pressable, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import HamburgerButton from "./HamburgerButton";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

type NavbarProps = {
  defaultMenuOpen?: boolean;
};

export default function Navbar({ defaultMenuOpen = false }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(defaultMenuOpen);

  const [openSections, setOpenSections] = useState<string[]>([
    "About",
    "Contact",
    "People",
    "Projects",
  ]);

  const menu = [
    {
      title: "About",
      links: [
        "About Us",
        "Our Design Process",
        "North Seattle College",
        "Client Framework",
        "The Student Story",
      ],
    },
    {
      title: "Contact",
      links: ["Become a Partner", "Request Student Info"],
    },
    {
      title: "People",
      links: ["Faculty & Staff", "Students", "Alumni"],
    },
    {
      title: "Projects",
      links: ["Current Projects", "Our Portfolio"],
    },
  ];

  useEffect(() => {
    if (!menuOpen) {
      setOpenSections([]);
    }
  }, [menuOpen]);

  return (
    <>
      {/* Top Navbar */}
      <View style={styles.container}>
        <View style={styles.logoBox}>
          <Text style={styles.logo}>LOGO</Text>
        </View>

        <HamburgerButton onPress={() => setMenuOpen(!menuOpen)} />
      </View>

      {/* Dropdown */}
      {menuOpen && (
        <View style={styles.dropdown}>
          {menu.map((section) => {
            const isOpen = openSections.includes(section.title);

            return (
              <View key={section.title}>
                <Pressable
                  onPress={() =>
                    setOpenSections((current) =>
                      isOpen
                        ? current.filter((t) => t !== section.title)
                        : [...current, section.title],
                    )
                  }
                >
                  <View style={styles.dropdownCategory}>
                    <Text style={styles.dropdownText}>{section.title}</Text>
                    <MaterialIcons
                      name={
                        isOpen ? "keyboard-arrow-up" : "keyboard-arrow-down"
                      }
                      size={24}
                      color="#DDD"
                    />
                  </View>
                </Pressable>

                {isOpen && (
                  <View style={styles.subMenu}>
                    {section.links.map((link) => (
                      <Text key={link} style={styles.row}>
                        {link}
                      </Text>
                    ))}
                  </View>
                )}
              </View>
            );
          })}

          {/* Donate */}
          <View style={styles.dropdownCategory}>
            <Text style={styles.dropdownText}>Donate</Text>
            <MaterialIcons name="keyboard-arrow-down" size={24} color="#DDD" />
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
    paddingHorizontal: 12,
  },
  logoBox: {
    backgroundColor: "#525252",
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    color: "#fff",
    fontSize: 14,
  },
  dropdown: {
    backgroundColor: "#383838",
    borderTopColor: "#B3B3B3",
    borderTopWidth: 6,
  },
  dropdownCategory: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  dropdownText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#DDD",
  },
  subMenu: {
    backgroundColor: "#B3B3B3",
    paddingVertical: 8,
    paddingLeft: 20,
  },
  row: {
    fontSize: 14,
    paddingVertical: 4,
    color: "#000",
  },
});
