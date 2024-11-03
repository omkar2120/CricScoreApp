// // screens/ScoreScreen.js
// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import ScoreBoard from '../component/ScoreBoard';

// export default function ScoreScreen({ route }) {
//   const { team1, team2 } = route.params;
// //   const [currentTeam, setCurrentTeam] = useState(team1);
// const [currentTeam, setCurrentTeam] = useState({ name: team1, players: [] });

//   const [score, setScore] = useState(0);
//   const [wickets, setWickets] = useState(0);
//   const [balls, setBalls] = useState(0);
//   const [runs, setRuns] = useState([]);
//   const [isTeam1Playing, setIsTeam1Playing] = useState(true);

//   const addRun = (run) => {
//     setScore(score + run);
//     setBalls(balls + 1);
//     setRuns([...runs, run]);
//   };

//   const addWicket = () => {
//     if (wickets < currentTeam.players.length - 1) {
//       setWickets(wickets + 1);
//       setBalls(balls + 1);
//       setRuns([...runs, 'W']);
//     } else {
//       if (isTeam1Playing) {
//         setIsTeam1Playing(false);
//         setCurrentTeam(team2);
//         resetScoreboard();
//       } else {
//         alert('Match over!');
//       }
//     }
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

//       <View style={styles.buttonContainer}>
//         {[0, 1, 2, 3, 4, 6].map((run) => (
//           <TouchableOpacity key={run} style={styles.runButton} onPress={() => addRun(run)}>
//             <Text style={styles.runButtonText}>{run}</Text>
//           </TouchableOpacity>
//         ))}
//       </View>

//       <View style={styles.specialButtonContainer}>
//         <TouchableOpacity style={styles.specialButton} onPress={() => addRun(1)}>
//           <Text style={styles.specialButtonText}>Wide Ball</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.specialButton} onPress={() => addRun(1)}>
//           <Text style={styles.specialButtonText}>No Ball</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.specialButton} onPress={addWicket}>
//           <Text style={styles.specialButtonText}>Wicket</Text>
//         </TouchableOpacity>
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
//   specialButtonContainer: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 15 },
//   specialButton: {
//     width: 100,
//     height: 50,
//     backgroundColor: '#4CAF50',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 5,
//   },
//   specialButtonText: { fontSize: 14, color: '#fff', fontWeight: 'bold' },
// });
// ----------------------------------------------------------------------------------
// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
// import ScoreBoard from '../component/ScoreBoard';

// export default function ScoreScreen({ route }) {
//   const { team1, team2, overs } = route.params;
//   const [currentTeam, setCurrentTeam] = useState(team1);
//   const [currentScore, setCurrentScore] = useState(0);
//   const [currentWickets, setCurrentWickets] = useState(0);
//   const [balls, setBalls] = useState(0);
//   const [runs, setRuns] = useState([]);
//   const [isTeam1Playing, setIsTeam1Playing] = useState(true);
//   const [team1Score, setTeam1Score] = useState(null);

//   const addRun = (run) => {
//     if (balls >= overs * 6 || currentWickets >= 10) {
//       switchInnings();
//       return;
//     }
//     setCurrentScore(currentScore + run);
//     setBalls(balls + 1);
//     setRuns([...runs, run]);
//   };

//   const addWicket = () => {
//     if (currentWickets >= 9 || balls >= overs * 6) {
//       switchInnings();
//       return;
//     }
//     setCurrentWickets(currentWickets + 1);
//     setBalls(balls + 1);
//     setRuns([...runs, 'W']);
//   };

//   const switchInnings = () => {
//     if (isTeam1Playing) {
//       setTeam1Score(currentScore);
//       setCurrentTeam(team2);
//       setCurrentScore(0);
//       setCurrentWickets(0);
//       setBalls(0);
//       setRuns([]);
//       setIsTeam1Playing(false);
//     } else {
//       const winner = currentScore > team1Score ? team2 : team1;
//       Alert.alert('Match Over', `${winner} wins!`);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <ScoreBoard team={currentTeam} score={currentScore} wickets={currentWickets} balls={balls} runs={runs} />
//       <View style={styles.buttonContainer}>
//         {[0, 1, 2, 3, 4, 6].map((run) => (
//           <TouchableOpacity key={run} style={styles.runButton} onPress={() => addRun(run)}>
//             <Text style={styles.runButtonText}>{run}</Text>
//           </TouchableOpacity>
//         ))}

//       </View>
//       <View style={styles.specialButtonContainer}>
//          <TouchableOpacity style={styles.specialButton} onPress={() => addRun(1)}>
//            <Text style={styles.specialButtonText}>Wide Ball</Text>
//          </TouchableOpacity>
//          <TouchableOpacity style={styles.specialButton} onPress={() => addRun(1)}>
//            <Text style={styles.specialButtonText}>No Ball</Text>
//          </TouchableOpacity>
//          <TouchableOpacity style={styles.specialButton} onPress={addWicket}>
//            <Text style={styles.specialButtonText}>Wicket</Text>
//          </TouchableOpacity>
//          {/* <TouchableOpacity style={styles.specialButton} onPress={addWicket}>
//           <Text style={styles.specialButtonText}>Wicket</Text>
//         </TouchableOpacity> */}
//        </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 20, backgroundColor: '#f8f8f8' },
//   buttonContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginVertical: 15 },
//   runButton: {
//     width: 60,
//     height: 60,
//     margin: 3,
//     backgroundColor: '#ddd',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 30,
//   },
//   runButtonText: { fontSize: 18, color: '#333' },
//   runButtonText: { fontSize: 18, color: '#333' },
//   specialButtonContainer: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 15 },
//   specialButton: {
//     width: 70,
//     height: 70,
//     margin: 5,
//     backgroundColor: '#4CAF50',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 35,
//   },
//   specialButtonText: { fontSize: 14, color: '#fff', fontWeight: 'bold' },
// });

import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Button,
} from "react-native";
import ScoreBoard from "../component/ScoreBoard";
export default function ScoreScreen({ route, navigation }) {
  const { team1, team2, overs } = route.params;
  const [currentTeam, setCurrentTeam] = useState(team1);
  const [currentScore, setCurrentScore] = useState(0);
  const [currentWickets, setCurrentWickets] = useState(0);
  const [balls, setBalls] = useState(0);
  const [runs, setRuns] = useState([]);
  const [extras, setExtras] = useState(0); // Track extra runs for wide balls
  const [isTeam1Playing, setIsTeam1Playing] = useState(true);
  const [team1Score, setTeam1Score] = useState(null);
  const [targetScore, setTargetScore] = useState(null);

  const addRun = (run) => {
    if (balls >= overs * 6 || currentWickets >= 10) {
      switchInnings();
      return;
    }
    setCurrentScore(currentScore + run);
    setBalls(balls + 1);
    setRuns([...runs, run]);
  };

  const addWicket = () => {
    if (currentWickets >= 9 || balls >= overs * 6) {
      switchInnings();
      return;
    }
    setCurrentWickets(currentWickets + 1);
    setBalls(balls + 1);
    setRuns([...runs, "W"]);
  };

  const addWideBall = () => {
    setCurrentScore(currentScore + 1);
    setExtras(extras + 1);
    setRuns([...runs, "WD"]);
  };

  const switchInnings = () => {
    if (isTeam1Playing) {
      setTeam1Score(currentScore);
      setTargetScore(currentScore + 1); // Target for second team to win
      setCurrentTeam(team2);
      setCurrentScore(0);
      setCurrentWickets(0);
      setBalls(0);
      setRuns([]);
      setExtras(0);
      setIsTeam1Playing(false);
    } else {
      const winner = currentScore >= targetScore ? team2 : team1;
      Alert.alert("Match Over", `${winner} wins!`);
    }
  };

  const checkForWinner = () => {
    if (!isTeam1Playing && currentScore >= targetScore) {
      Alert.alert("Match Over", `${team2} wins!`);
      return true;
    }
    if (!isTeam1Playing && balls >= overs * 6) {
      const winner = currentScore >= targetScore ? team2 : team1;
      Alert.alert("Match Over", `${winner} wins!`);
      return true;
    }
    return false;
  };

  return (
    <View style={styles.container}>
      <ScoreBoard
        team={currentTeam}
        score={currentScore}
        wickets={currentWickets}
        balls={balls}
        runs={runs}
        extras={extras}
        target={targetScore} // Pass target for second innings display
        ballsRemaining={isTeam1Playing ? null : overs * 6 - balls}
        runsNeeded={isTeam1Playing ? null : targetScore - currentScore}
      />

      <View style={styles.buttonContainer}>
        {[0, 1, 2, 3, 4, 6].map((run) => (
          <TouchableOpacity
            key={run}
            style={styles.runButton}
            onPress={() => {
              addRun(run);
              checkForWinner();
            }}
          >
            <Text style={styles.runButtonText}>{run}</Text>
          </TouchableOpacity>
        ))}

        {/* <TouchableOpacity
          style={styles.runButton}
          onPress={() => {
            addWicket();
            checkForWinner();
          }}
        >
          <Text style={styles.runButtonText}>Wicket</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.runButton}
          onPress={() => {
            addWideBall();
            checkForWinner();
          }}
        >
          <Text style={styles.runButtonText}>Wide</Text>
        </TouchableOpacity> */}
      </View>

      <View style={styles.specialButtonContainer}>
        <TouchableOpacity style={styles.specialButton}  onPress={() => {
            addWideBall();
            checkForWinner();
          }}>
          <Text style={styles.specialButtonText}>Wide Ball</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.specialButton}
          onPress={() => addRun(1)}
        >
          <Text style={styles.specialButtonText}>No Ball</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.specialButton}  onPress={() => {
            addWicket();
            checkForWinner();
          }}>
          <Text style={styles.specialButtonText}>Wicket</Text>
        </TouchableOpacity>
      </View>
    </View>

    // {checkForWinner() && (
    //   <Button
    //     title="Back to Home"
    //     onPress={() => navigation.navigate("Home")}
    //     color="#4CAF50"
    //   />
    // )}
    // </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f8f8f8" },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginVertical: 15,
  },
  runButton: {
    width: 60,
    height: 60,
    margin: 5,
    backgroundColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  runButtonText: { fontSize: 18, color: "#333" },
  specialButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 15,
  },
  specialButton: {
    width: 70,
    height: 70,
    margin: 5,
    backgroundColor: "#4CAF50",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 35,
  },
  specialButtonText: { fontSize: 14, color: "#fff", fontWeight: "bold" },
});
