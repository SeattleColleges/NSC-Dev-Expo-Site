import { View, ScrollView } from 'react-native';
import ProcessSection from '../../components/ProcessSection';

export default function ProcessPage() {
  return (
    <ScrollView>
      <View style={{ width: '100%' }}>
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
        
        {/* You can easily add Step 2 here by dropping in another <ProcessSection /> ! */}
        
      </View>
    </ScrollView>
  );
}