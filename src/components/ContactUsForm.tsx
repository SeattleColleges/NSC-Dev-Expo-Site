import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const ContactUsForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [message, setMessage] = useState("");

 const handleSubmit = () => {
  if (!name.trim() || !email.trim() || !message.trim()) {
    Alert.alert(
      "Missing Required Fields",
      "Please fill out Name, Email, and Your message before submitting."
    );
    return;
  }

  Alert.alert(
    "Contact Form Submitted",
    `Name: ${name}
Email: ${email}
Business Name: ${businessName || "N/A"}
Message: ${message}`
  );
};

  return (
    <View style={styles.wrapper}>
      <View style={styles.phoneFrame}>
        <View style={styles.formContainer}>
          <Text style={styles.heading}>
            Are you a small business{"\n"}or Non-profit Org?
          </Text>

          <Text style={styles.subheading}>Tell us what you need help with</Text>

          <Text style={styles.title}>Contact Us</Text>
          <Text style={styles.required}>Required*</Text>

          <Text style={styles.label}>Name*</Text>
          <TextInput
            accessibilityLabel="Name (required)"
            style={styles.input}
            value={name}
            onChangeText={setName}
          />

          <Text style={styles.label}>Email*</Text>
          <TextInput
            accessibilityLabel="Email (required)"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          <Text style={styles.label}>Business Name (Optional)</Text>
          <TextInput
            accessibilityLabel="Business Name (optional)"
            style={styles.input}
            value={businessName}
            onChangeText={setBusinessName}
          />

          <Text style={styles.label}>Your message*</Text>
          <TextInput
            accessibilityLabel="Your message (required)"
            style={styles.messageInput}
            value={message}
            onChangeText={setMessage}
            multiline
            textAlignVertical="top"
          />

          <TouchableOpacity accessibilityRole="button" style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ContactUsForm;

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
    backgroundColor: "#ffffff",
    alignItems: "flex-start",
  },
  phoneFrame: {
    width: "100%",
    minHeight: 560,
    borderRadius: 8,
    paddingHorizontal: 26,
    paddingVertical: 32,
    backgroundColor: "#ffffff",
  },
  formContainer: {
    width: "100%",
  },
  heading: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111111",
    lineHeight: 30,
    marginBottom: 8,
  },
  subheading: {
    fontSize: 15,
    color: "#222222",
    marginBottom: 26,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111111",
    marginBottom: 4,
  },
  required: {
    fontSize: 11,
    fontWeight: "600",
    marginBottom: 10,
  },
  label: {
    fontSize: 13,
    fontWeight: "700",
    color: "#222222",
    marginBottom: 4,
  },
  input: {
    height: 28,
    borderWidth: 1,
    borderColor: "#555555",
    marginBottom: 14,
    paddingHorizontal: 8,
    fontSize: 13,
  },
  messageInput: {
    height: 70,
    borderWidth: 1,
    borderColor: "#555555",
    marginBottom: 24,
    paddingHorizontal: 8,
    paddingTop: 6,
    fontSize: 13,
  },
  button: {
    height: 42,
    backgroundColor: "#333333",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700",
  },
});
