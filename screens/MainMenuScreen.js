// screens/MainMenuScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function MainMenuScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to the Cricket Score App</Text>
      <Button
        title="Start Single Match"
        onPress={() => navigation.navigate('MatchSetup')}
      />
      <Button
        title="Start Tournament"
        disabled
        onPress={() => console.log('Tournament Setup')} // Implement tournament setup later
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  header: { fontSize: 24, marginBottom: 20 },
});
