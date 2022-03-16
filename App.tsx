import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';

const Section: React.FC<{
  companyName: string;
  title: string;
}> = ({children, companyName, title}) => {
  return (
    <View>
      <Text style={[styles.sectionTitle]}>
        <Text style={[styles.companyHighlight]}>{companyName}</Text> {title}
      </Text>
      <Text style={[styles.sectionDescription]}> {children}</Text>
    </View>
  );
};

const App = () => {
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Section companyName="NETFLIX" title="Entertainment">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    top: '43%',
    padding: 8,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center',
  },
  companyHighlight: {
    fontWeight: '700',
    color: '#E50914',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
