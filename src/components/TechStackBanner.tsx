import { View, Text} from "react-native";
import { styles } from "./styles";

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
        
        <View style={styles.container}>
        <View style={styles.content}>
        <Text style={styles.title}>Our Tech Stack</Text>


    <View style={styles.grid}>
        <TechItem name={"Java\nScript"}/>
        <TechItem name={"Figma"}/>
        <TechItem name={"SQL"}/>
        <TechItem name={"Type\nScript"}/>
        <TechItem name={"Mongo\nDB"}/>
        <TechItem name={ "And\n Much\n More"} showLabel= {false} />
       
       </View>
       </View>
       </View>

);


    
}

