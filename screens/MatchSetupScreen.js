import React, { useState } from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";

export default function MatchSetupScreen({ navigation }) {
  const [team1, setTeam1] = useState("Team 1");
  const [team2, setTeam2] = useState("Team 2");
  const [overs, setOvers] = useState(2);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Match Setup</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Team 1 Name"
        value={team1}
        onChangeText={setTeam1}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Team 2 Name"
        value={team2}
        onChangeText={setTeam2}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Number of Overs"
        value={overs.toString()}
        keyboardType="numeric"
        onChangeText={(value) => setOvers(parseInt(value))}
      />
      <Button
        title="Proceed to Scoring"
        onPress={() => navigation.navigate('Score', { team1, team2, overs })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  header: { fontSize: 24, marginBottom: 20 },
  input: {
    width: "80%",
    padding: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
  },
});
