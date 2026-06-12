import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    color: "black",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  card: {
    width: 380,
    borderWidth: 1,
    borderColor: "#ccc",
  },

  cardHeader: {
    backgroundColor: "#777",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },

  cardTitle: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  imagePlaceholder: {
    height: 280,
    backgroundColor: "#D9D9D9",

  },

  clientSection: {
    backgroundColor: "#888",
    padding: 8,
  },

  clientText: {
    color: "white",
    textAlign: "center",
    fontSize: 13,
  },

  content: {
    padding: 15,
    alignItems: "center",
    backgroundColor: "#E5E5E5",
  },

  tagline: {
    fontWeight: "bold",
    marginBottom: 8,
  },

  description: {
    textAlign: "center",
    marginBottom: 15,
    fontSize: 12,
    lineHeight: 16,
  },
  techStack: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 20,
    marginBottom: 20,
  },


  techText: {
    color: "#808080",
    fontWeight: "bold",
     marginTop: 8,
     textAlign: "center",
  }, 


  techItem: {
    alignItems: "center",
  },
  
  
  
  techBox: {
    backgroundColor: "#999999",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 4,
  
  },


  logo: {
    backgroundColor: "#666",
    color: "white",
    padding: 15,
    fontWeight: "bold",
  },


  

  button: {
    backgroundColor: "#5A5A5A",
    borderWidth: 1,
    borderColor: "#D9D9D9",
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginBottom: 20,
    width: 380,
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontSize: 16,
  },

  navigation: {
    width: 380,
    backgroundColor: "#555",
    padding: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },

  navBar: {
    width: 380,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginBottom: 10,
  },
  
  
  
  menuIcon: {
    fontSize: 80,
   
  },
  
  titleBar: {
    backgroundColor: "#555555",
    width: 380,
    paddingVertical: 12,
    marginBottom: 10,
  },
  
  bcLogo: {
    width: 60,
    height: 60,
    backgroundColor: "#666",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
    fontStyle: "italic",
  },
  
  logoText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    lineHeight: 22,
  },
  
  projectName: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  
  navText: {
    fontSize: 20,
    color: "white",
  },
});
