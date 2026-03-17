import { View, Text } from "react-native";
import { Link } from "expo-router";
import AlumniCard from "./AlumniCard";

export default function AlumniSection() {
  return (
    <View
      style={{
        width: "100%",
        alignItems: "center",
        marginTop: 20,
      }}
    >
      <View
        style={{
          width: "100%",
          backgroundColor: "#444",
          height: 172,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* INNER CONTAINER */}
        <View
          style={{
            width: 1255,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 40,
              fontWeight: "600",
              color: "#E4E4E4",
            }}
          >
            Want to apply as a student?
          </Text>

          {/* Apply Now clickable */}
          <Link href="/apply">
            <View
              style={{
                backgroundColor: "black",
                width: 380,
                height: 60,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 4,
              }}
            >
              <Text style={{ color: "white", fontSize: 18 }}>Apply Now</Text>
            </View>
          </Link>
        </View>
      </View>

      <View
        style={{
          width: 1255,
        }}
      >
        {/* Title row */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 30,
          }}
        >
          {/* Alumni */}
          <Text
            style={{
              fontSize: 40,
              fontWeight: "600",
            }}
          >
            Alumni
          </Text>

          {/* See All clickable */}
          <Link href="/alumni">
            <Text
              style={{
                fontSize: 32,
              }}
            >
              See All &gt;
            </Text>
          </Link>
        </View>

        {/* Cards */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          <AlumniCard />
          <AlumniCard />
          <AlumniCard />
          <AlumniCard />
        </View>
      </View>
    </View>
  );
}
