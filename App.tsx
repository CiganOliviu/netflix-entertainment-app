import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import {ContainerTextWrapper, HighlightText, SectionContainer, SectionDescription, SectionTitle} from "./App.css";

const Section: React.FC<{
  companyName: string;
  title: string;
}> = ({children, companyName, title}) => {
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
          <Section companyName="NETFLIX" title="Entertainment">
            Edit <HighlightText>App.tsx</HighlightText> to change this
            screen and then come back to see your edits.
          </Section>
        </View>
      </ScrollView>
    </SectionContainer>
  );
};

export default App;
