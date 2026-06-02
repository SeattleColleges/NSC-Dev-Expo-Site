import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Modal, Pressable } from "react-native";

type ProjectOption = {
  id: string;
  label: string;
};

type Props = {
  label?: string;
  buttonText?: string;
  options?: ProjectOption[];
  onSelect?: (option: ProjectOption) => void;
};

const DEFAULT_OPTIONS: ProjectOption[] = [
  { id: "next-wave-dev", label: "Next Wave Dev" },
  { id: "belindas-closet", label: "Belinda's Closet" },
  { id: "nsc-events", label: "NSC Events" },
];

export const CurrentProjectsDropdown: React.FC<Props> = ({
  label = "Current Projects",
  buttonText = "Select Projects",
  options = DEFAULT_OPTIONS,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<ProjectOption | null>(null);

  const handleSelect = (option: ProjectOption) => {
    setSelected(option);
    setIsOpen(false);
    onSelect?.(option);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <TouchableOpacity style={styles.button} onPress={() => setIsOpen(true)}>
        <Text style={styles.buttonText}>
          {selected ? selected.label : buttonText}
        </Text>
        <Text style={styles.chevron}>⌄</Text>
      </TouchableOpacity>

      <Modal
        visible={isOpen}
        transparent
        animationType="fade"
        onRequestClose={() => setIsOpen(false)}
      >
        <Pressable style={styles.backdrop} onPress={() => setIsOpen(false)}>
          <View style={styles.menuContainer}>
            <Text style={styles.menuTitle}>Select Projects</Text>
            {options.map((option) => (
              <Pressable
                key={option.id}
                style={styles.menuItem}
                onPress={() => handleSelect(option)}
              >
                <Text style={styles.menuItemText}>{option.label}</Text>
              </Pressable>
            ))}
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 8,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    backgroundColor: "#FFFFFF",
  },
  buttonText: {
    fontSize: 14,
  },
  chevron: {
    fontSize: 16,
  },
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  menuContainer: {
    width: "80%",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 12,
  },
  menuItem: {
    paddingVertical: 10,
  },
  menuItemText: {
    fontSize: 14,
  },
});

export default CurrentProjectsDropdown;
