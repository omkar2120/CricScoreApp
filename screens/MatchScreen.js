// // screens/MatchScreen.js
// import React, { useState } from "react";
// import { View, Text, Button, StyleSheet, TextInput } from "react-native";

// export default function MatchScreen({ navigation }) {
//   const [team1, setTeam1] = useState("Team 1");
//   const [team2, setTeam2] = useState("Team 2");

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Match Details</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter Team 1 Name"
//         value={team1}
//         onChangeText={setTeam1}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Enter Team 2 Name"
//         value={team2}
//         onChangeText={setTeam2}
//       />
//       <Button
//         title="Start Scoring"
//         color="#4CAF50"
//         onPress={() => {
//             console.log("Navigating to ScoreScreen with:", team1, team2); // Log here
//             navigation.navigate('Score', { team1, team2 });
//           }}
//         // onPress={() => navigation.navigate("Score", { team1, team2 })} // Check here
//       />
//       {/* <Button
//         title="Start Scoring"
//         color="#4CAF50"
//         onPress={() => navigation.navigate('Score', { team1, team2 })}
//       /> */}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: "center", alignItems: "center" },
//   header: { fontSize: 24, marginBottom: 20 },
//   input: {
//     width: "80%",
//     padding: 10,
//     borderColor: "#ccc",
//     borderWidth: 1,
//     borderRadius: 5,
//     marginBottom: 15,
//   },
// });

// screens/MatchSetupScreen.js
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

export default function MatchSetupScreen({ navigation }) {
  const [team1, setTeam1] = useState('');
  const [team2, setTeam2] = useState('');
  const [overs, setOvers] = useState('');

  const handleStartMatch = () => {
    if (team1 && team2 && overs) {
      navigation.navigate('Score', { team1, team2, overs });
    } else {
      alert('Please fill in all fields.');
    }
  };

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
        value={overs}
        onChangeText={setOvers}
        keyboardType="numeric"
      />
      <Button
        title="Start Scoring"
        onPress={handleStartMatch}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  header: { fontSize: 24, marginBottom: 20 },
  input: {
    width: '80%',
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
  },
});

