import { View, Text, ScrollView } from 'react-native';
import ProcessSection from '../../components/ProcessSection';

export default function AboutPage() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
      
      <View style={{ padding: 60, alignItems: 'center' }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Welcome to the About Page!</Text>
      </View>

      <ProcessSection
        stepNumber="1"
        title="Conducting Research"
        header="Getting Started"
        bodyText="Whatever project or business venture we will research the needs and wants for your project. We will ensure that will produce a service or products that will meets the needs of your venture."
        secondHeader="Let us jump start your project"
        secondBodyText="If you want to create or redesign your product or service we will conduct our own research. You are able to guide us in the direction you want or we can do all the work for you design the vision for you."
        deliverableTitle="Conducting Research Deliverables -"
        deliverables={[
          { label: 'Project Scope Document' },
          { label: 'Requirements Document' },
          { label: 'User Personas' },
        ]}
      />
      
    </ScrollView>
  );
}