import React, { useState } from "react";
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type ProjectOption = {
  title: string;
  subtitle?: string;
};

type CurrentProjectsDropdownProps = {
  options?: ProjectOption[];
  selectedProject?: string;
  onSelectProject?: (project: ProjectOption) => void;
};

const defaultOptions: ProjectOption[] = [
  { title: "Next Wave Dev", subtitle: "Digital signage" },
  { title: "Belinda's Closet", subtitle: "Static webpage" },
  { title: "NSC Events", subtitle: "Static webpage" },
];

export default function CurrentProjectsDropdown({
  options = defaultOptions,
  selectedProject = "Select Projects",
  onSelectProject,
}: CurrentProjectsDropdownProps) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(selectedProject);

  const handleSelect = (project: ProjectOption) => {
    setSelected(project.title);
    onSelectProject?.(project);
    setOpen(false);
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Current Projects</Text>

      <TouchableOpacity style={styles.selectButton} onPress={() => setOpen(true)}>
        <Text style={styles.selectText}>{selected}</Text>
        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>

      <Modal visible={open} transparent animationType="fade">
        <View style={styles.overlay}>
          <View style={styles.menu}>
            <TouchableOpacity style={styles.menuHeader} onPress={() => setOpen(false)}>
              <Text style={styles.menuTitle}>Select Projects</Text>
              <Text style={styles.backArrow}>‹</Text>
            </TouchableOpacity>

            {options.map((project) => (
              <Pressable
                key={project.title}
                style={[
                  styles.option,
                  selected === project.title && styles.selectedOption,
                ]}
                onPress={() => handleSelect(project)}
              >
                <Text
                  style={[
                    styles.optionTitle,
                    selected === project.title && styles.selectedText,
                  ]}
                >
                  {project.title}
                </Text>

                {project.subtitle && (
                  <Text
                    style={[
                      styles.optionSubtitle,
                      selected === project.title && styles.selectedText,
                    ]}
                  >
                    {project.subtitle}
                  </Text>
                )}
              </Pressable>
            ))}
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    backgroundColor: "#3f3f3f",
    paddingTop: 10,
    paddingBottom: 14,
    paddingHorizontal: 12,
    alignItems: "center",
  },
  title: {
    color: "#ffffff",
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 8,
  },
  selectButton: {
    width: "88%",
    backgroundColor: "#707070",
    paddingVertical: 12,
    paddingHorizontal: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  selectText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700",
  },
  arrow: {
    color: "#111111",
    fontSize: 30,
    fontWeight: "700",
  },
  overlay: {
    flex: 1,
    backgroundColor: "#3f3f3f",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 90,
  },
  menu: {
    width: "86%",
    maxWidth: 340,
    backgroundColor: "#4a4a4a",
    padding: 16,
  },
  menuHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
  },
  menuTitle: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "700",
  },
  backArrow: {
    color: "#111111",
    fontSize: 34,
    fontWeight: "700",
  },
  option: {
    backgroundColor: "#d9d9d9",
    paddingVertical: 18,
    paddingHorizontal: 12,
    marginBottom: 14,
    alignItems: "center",
  },
  selectedOption: {
    backgroundColor: "#000000",
  },
  optionTitle: {
    color: "#111111",
    fontSize: 16,
    fontWeight: "700",
  },
  optionSubtitle: {
    color: "#777777",
    fontSize: 10,
    marginTop: 4,
  },
  selectedText: {
    color: "#ffffff",
  },
});