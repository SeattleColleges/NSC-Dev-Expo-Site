import { View, Text } from "react-native";

export default function AlumniCard() {
  return (
    <View
      style={{
        width: 236,
        height: 491,
        margin: 12,
        alignItems: "center",
      }}
    >
      {/* IMAGE */}
      <View
        style={{
          width: 200,
          height: 200,
          backgroundColor: "#9e9e9e",
          marginBottom: 12,
        }}
      />

      {/* NAME */}
      <Text
        style={{
          fontSize: 24,
          fontWeight: "500",
          textAlign: "center",
        }}
      >
        Ed Boi
      </Text>

      {/* ROLE */}
      <Text
        style={{
          fontSize: 16,
          fontStyle: "italic",
          textAlign: "center",
          marginTop: 2,
        }}
      >
        Design Lead
      </Text>

      {/* DESCRIPTION */}
      <Text
        style={{
          fontSize: 15,
          textAlign: "center",
          width: 229,
          marginTop: 6,
        }}
      >
        I am the design for several projects.
        I do stuff for the school and to aid
        local businesses and non-profit
        organizations with their needs…
      </Text>

      {/* ICONS */}
      <View
        style={{
          flexDirection: "row",
          marginTop: 10,
          width: 102,
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 18 }}>🐙</Text>
        <Text style={{ fontSize: 18 }}>in</Text>
      </View>

      {/* PROFILE LINK */}
      <Text
        style={{
          marginTop: 6,
          fontSize: 14,
        }}
      >
        Student Profile >
      </Text>
    </View>
  );
}