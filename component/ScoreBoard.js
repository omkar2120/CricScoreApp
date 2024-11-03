
// // components/ScoreBoard.js
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// export default function ScoreBoard({ team, score, wickets, balls, runs }) {
//   const overs = Math.floor(balls / 6) + '.' + (balls % 6);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.teamName}>{team}*</Text>
//       <Text style={styles.score}>{score}/{wickets}</Text>
//       <Text style={styles.overs}>({overs} overs)</Text>

//       <View style={styles.statsContainer}>
//         <Text style={styles.statText}>Run rate</Text>
//         <Text style={styles.statText}>Extras</Text>
//         <Text style={styles.statText}>Projected Score</Text>
//       </View>
//       <View style={styles.statsValues}>
//         <Text style={styles.statValue}>{(score / (balls / 6 || 1)).toFixed(1)}</Text>
//         <Text style={styles.statValue}>NB 2 WD 4</Text>
//         <Text style={styles.statValue}>{(score * 2).toFixed(0)}</Text>
//       </View>

//       <View style={styles.recentRunsContainer}>
//         <Text style={styles.recentRunsText}>This Over</Text>
//         <Text style={styles.recentRuns}>{runs.slice(-6).join(' • ')}</Text>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { padding: 20, alignItems: 'center', backgroundColor: '#f8f8f8' },
//   teamName: { fontSize: 18, fontWeight: 'bold', color: '#555' },
//   score: { fontSize: 48, fontWeight: 'bold', color: '#333' },
//   overs: { fontSize: 16, color: '#666' },
//   statsContainer: { flexDirection: 'row', justifyContent: 'space-around', width: '100%', marginTop: 10 },
//   statText: { fontSize: 14, color: '#666' },
//   statsValues: { flexDirection: 'row', justifyContent: 'space-around', width: '100%', marginTop: 5 },
//   statValue: { fontSize: 16, fontWeight: 'bold', color: '#333' },
//   recentRunsContainer: { marginTop: 15, alignItems: 'center' },
//   recentRunsText: { fontSize: 14, color: '#666' },
//   recentRuns: { fontSize: 18, color: '#333' },
// });

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ScoreBoard({ team, score, wickets, balls, runs, extras, target, ballsRemaining, runsNeeded }) {
  const overs = Math.floor(balls / 6) + '.' + (balls % 6);
  const runRate = (score / (balls / 6 || 1)).toFixed(1);
  
  return (
    <View style={styles.container}>
      <Text style={styles.teamName}>{team}</Text>
      <Text style={styles.score}>{score}/{wickets}</Text>
      <Text style={styles.overs}>({overs} overs)</Text>

      {target !== null && (
        <Text style={styles.targetText}>Target: {target}</Text>
      )}
      {runsNeeded !== null && ballsRemaining !== null && (
        <Text style={styles.chaseText}>Needs {runsNeeded} runs from {ballsRemaining} balls</Text>
      )}

      <View style={styles.statsContainer}>
        <Text style={styles.statText}>Run rate</Text>
        <Text style={styles.statText}>Extras</Text>
        <Text style={styles.statText}>Projected Score</Text>
      </View>
      <View style={styles.statsValues}>
        <Text style={styles.statValue}>{runRate}</Text>
        <Text style={styles.statValue}>{extras}</Text>
        <Text style={styles.statValue}>{(score * 2).toFixed(0)}</Text>
      </View>

      <View style={styles.recentRunsContainer}>
        <Text style={styles.recentRunsText}>This Over</Text>
        <Text style={styles.recentRuns}>{runs.slice(-6).join(' • ')}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, alignItems: 'center', backgroundColor: '#f8f8f8' },
  teamName: { fontSize: 18, fontWeight: 'bold', color: '#555' },
  score: { fontSize: 48, fontWeight: 'bold', color: '#333' },
  overs: { fontSize: 16, color: '#666' },
  targetText: { fontSize: 16, color: '#d32f2f', fontWeight: 'bold', marginTop: 10 },
  chaseText: { fontSize: 16, color: '#1976d2', fontWeight: 'bold', marginTop: 10 },
  statsContainer: { flexDirection: 'row', justifyContent: 'space-around', width: '100%', marginTop: 10 },
  statText: { fontSize: 14, color: '#666' },
  statsValues: { flexDirection: 'row', justifyContent: 'space-around', width: '100%', marginTop: 5 },
  statValue: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  recentRunsContainer: { marginTop: 15, alignItems: 'center' },
  recentRunsText: { fontSize: 14, color: '#666' },
  recentRuns: { fontSize: 18, color: '#333' },
});
