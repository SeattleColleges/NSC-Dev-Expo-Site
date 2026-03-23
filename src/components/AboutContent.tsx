
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function AboutContent(props: any) {
   console.log("AboutContent rendered");
   console.log("Props:", props);

   return (
      <ScrollView>
         
         {/* HERO HEADER */} 
         <View style={styles.hero}> 
            <Text style={styles.heroText}>
               North Seattle College{"\n"}Application Development
            </Text>
         </View>

         {/* MAIN CONTENT */} 
         <View style={styles.container}> 
            <Text style={styles.paragraph}>
               Welcome, in this program we are dedicated to cultivating the next generation of skilled app developers.
            </Text> 

            <Text style={styles.paragraph}>
               We empower students to create innovative and impactful solutions in the ever-evolving world of technology.
               Our program equips them with the knowledge and hands-on experience needed to excel in the tech industry.
            </Text> 

            {/* IMAGE 1 */} 
            <View style={styles.imageBox}> 
               <Text style={styles.imageText}>Image here*</Text> 
            </View> 

            <Text style={styles.boldText}>
               Students will learn the skills they need through real projects from actual local businesses and non-profit organizations.
            </Text> 

            <Text style={styles.paragraph}>
               Through a blend of rigorous coursework, practical project development, internships and mentorships from industry experts,
               and engagement with real-time projects from clients, we foster a dynamic learning environment that nurtures creativity,
               critical thinking, and technical proficiency.
            </Text>

            <Text style={styles.paragraph}>
               At NSCC, we believe in the power of education and innovation to transform lives and communities.
               Join us to unlock your potential, gain invaluable experience, and make a meaningful impact in the digital world.
            </Text> 

            {/* IMAGE 2 */} 
            <View style={styles.imageBox}> 
               <Text style={styles.imageText}>Image here*</Text> 
            </View> 

         </View> 

      </ScrollView>
   );
}
            
const styles = StyleSheet.create({
   hero: {
      backgroundColor: "#666",
      padding: 20, 
   },

   heroText: {
      color: "#fff",
      padding: 20, 
   },
   
   container:{ 
      backgroundColor: "#fff", 
      padding: 20, 
   },

   paragraph: { 
      fontSize: 14, 
      lineHeight: 20, 
      marginBottom: 16, 
      color: "#333", 
   }, 
      
   boldText: { 
      fontSize: 14, 
      fontWeight: "bold", 
      marginBottom: 16, 
      color: "#000", 
   }, 
      
   imageBox: { 
      height: 200, 
      backgroundColor: "#ccc", 
      justifyContent: "center", 
      alignItems: "center", 
      marginVertical: 20, 
      borderRadius: 6, 
   }, 
   
   imageText: { 
      color: "#666", 
   }, 
   
});



