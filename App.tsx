import React from 'react';
import { ScrollView, View } from 'react-native';
import {
  ContainerTextWrapper,
  SectionContainer,
  SectionDescription,
  SectionTitle,
} from './App.css';

const Section: React.FC<{
  companyName: string;
  title: string;
}> = ({ children, companyName, title }) => {
  return (
    <SectionContainer>
      <SectionTitle>
        <ContainerTextWrapper>{companyName}</ContainerTextWrapper> {title}
      </SectionTitle>
      <SectionDescription> {children}</SectionDescription>
    </SectionContainer>
  );
};

const App = () => {
  return (
    <SectionContainer>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Section companyName="NETFLIX" title="Entertainment" />
        </View>
      </ScrollView>
    </SectionContainer>
  );
};

export default App;
