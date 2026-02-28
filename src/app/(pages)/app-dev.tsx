
import { View, Text , StyleSheet} from "react-native";

export default function AppDevPage() {

 return (

  <View style ={styles.page}>
  <View style={styles.card}>
  <Text style={styles.title}>Application Development</Text>
  <Text style={styles.subtitle}>Bachelor of Applied Science (BAS)</Text>
  

  

      { /* Top Row */ }  
      <View style={styles.row}>
      <View style={styles.column}>
      <Text style={styles.sectionTitle}>Affordable Tuition</Text>
      <Text style={styles.paragraph}>We are a community college so tuition costs are dirt cheap compared to universities.
      </Text>
      </View>

      <View style={styles.column}>
        <Text style={styles.sectionTitle}>Small Hybrid Classes</Text>
        <Text style={styles.paragraph}>We offer fully online classes whichnare all at evening where you can easily plan around
        </Text>

      </View>
      </View>

      {/* Bottom Center */}
      <View style={styles.bottomSection}>
        <Text style={styles.sectionTitle}>Hands On Learning</Text>
        <Text style={styles.paragraph}> After learning a concept you will utilize that exact knowledge in our practicum courses which will have you building real client projects.
         </Text>
    
      </View>
  </View>

  </View>

 );

}




 const styles = StyleSheet.create ({
  page: {
    padding: 20,
    backgroundColor: "#f4f4f4",
    flex: 1,
    alignItems: "center",

    
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",

 

  },
  subtitle: {
    fontSize: 14,
    marginTop: 6,
    textAlign: "center",
    marginBottom: 30,

  },
 
  programTitle:{
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 30,
  },

  card: {
 padding: 40,
 backgroundColor: "white",
 marginTop: 24,
 width: 400,

 
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",

  },
  column: {
    width: "45%",

  },


  bottomSection: {
    marginTop: 50,
    alignItems: "center",

  },


  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign:  "center",

  },

  paragraph: {
    fontSize: 14,
    marginTop: 8,
    lineHeight: 20,
    textAlign: "center",

  },

});