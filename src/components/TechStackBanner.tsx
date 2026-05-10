import { View, Text, StyleSheet } from "react-native";

function TechItem({
  name,
  showLabel = true,
}: {
  name: string;
  showLabel?: boolean;
}) {
  return (
    <View style={styles.techItem}>
      {showLabel && (
        <Text style={styles.toolLabel}>Tool Icon</Text>
      )}

      <Text style={styles.toolName}>{name}</Text>
    </View>
  );
}

export default function TechStackBanner() {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Text style={styles.title}>Our Tech Stack</Text>

        <View style={styles.grid}>
          <TechItem name={"Java\nScript"} />
          <TechItem name={"Figma"} />
          <TechItem name={"SQL"} />

          <TechItem name={"Type\nScript"} />
          <TechItem name={"Mongo\nDB"} />

          <TechItem
            name={"And\nMuch\nMore"}
            showLabel={false}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#2F2F2F",
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },

  container: {
    width: "100%",
    maxWidth: 900,
    backgroundColor: "#B7B7B0",
    paddingVertical: 80,
    paddingHorizontal: 60,
    alignItems: "center",
  },

  title: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 70,
    textAlign: "center",
  },

  grid: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 60,
  },

  techItem: {
    width: "30%",
  },

  toolLabel: {
    fontSize: 12,
    color: "#F2F2F2",
    marginBottom: 8,
  },

  toolName: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});