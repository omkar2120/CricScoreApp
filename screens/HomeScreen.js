

// // screens/ScoreScreen.js
// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import ScoreBoard from '../component/ScoreBoard';
// import PlayerSelector from '../component/PlayerSelector';
// export default function ScoreScreen({ route }) {
//     console.log(route.params);
//     const { team1, team2 } = route.params || {};
    
    
//     console.log(route.params);
// //   const [currentTeam, setCurrentTeam] = useState(team1);
// const [currentTeam, setCurrentTeam] = useState({ name: team1, players: [] });

//   const [players, setPlayers] = useState([]);
//   const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
//   const [score, setScore] = useState(0);
//   const [wickets, setWickets] = useState(0);
//   const [balls, setBalls] = useState(0);
//   const [runs, setRuns] = useState([]);
//   const [isTeam1Playing, setIsTeam1Playing] = useState(true);

//   const addPlayer = (playerName) => {
//     setPlayers([...players, { name: playerName, isOut: false }]);
//   };

//   const handlePlayerOut = (playerIndex) => {
//     const updatedPlayers = [...players];
//     updatedPlayers[playerIndex].isOut = true;
//     setPlayers(updatedPlayers);
//     setWickets(wickets + 1);

//     // Check if all players are out for the current team
//     if (wickets + 1 >= players.length) {
//       // Switch teams if all players are out
//       if (isTeam1Playing) {
//         setIsTeam1Playing(false);
//         // setCurrentTeam(team2);
//         setCurrentTeam({ name: team2, players: [] }); // Update here

//         resetScoreboard();
//         setPlayers([]);
//       } else {
//         alert('Match over!');
//       }
//     } else {
//       setCurrentPlayerIndex(currentPlayerIndex + 1);
//     }
//   };

//   const addRun = (run) => {
//     setScore(score + run);
//     setBalls(balls + 1);
//     setRuns([...runs, run]);
//   };

//   const resetScoreboard = () => {
//     setScore(0);
//     setWickets(0);
//     setBalls(0);
//     setRuns([]);
//   };

//   return (
//     <View style={styles.container}>
//       <ScoreBoard team={currentTeam.name} score={score} wickets={wickets} balls={balls} runs={runs} />

//       <PlayerSelector players={players} addPlayer={addPlayer} onPlayerOut={handlePlayerOut} />

//       <View style={styles.buttonContainer}>
//         {[0, 1, 2, 3, 4, 6].map((run) => (
//           <TouchableOpacity key={run} style={styles.runButton} onPress={() => addRun(run)}>
//             <Text style={styles.runButtonText}>{run}</Text>
//           </TouchableOpacity>
//         ))}
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 20, backgroundColor: '#f8f8f8' },
//   buttonContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginVertical: 15 },
//   runButton: {
//     width: 60,
//     height: 60,
//     margin: 5,
//     backgroundColor: '#ddd',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 30,
//   },
//   runButtonText: { fontSize: 18, color: '#333' },
// });

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to CricScoreApp</Text>
      <Button
        title="Start Single Match"
        onPress={() => navigation.navigate('MatchSetup')}
      />
       <Button
        title="Start Tournament"
        disabled
        onPress={() => navigation.navigate('MatchSetup')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  header: { fontSize: 24, marginBottom: 20 },
});


