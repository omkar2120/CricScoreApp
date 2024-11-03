// components/PlayerSelector.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function PlayerSelector({ players, addPlayer, onPlayerOut }) {
  const [playerName, setPlayerName] = useState('');

  const handleAddPlayer = () => {
    if (playerName) {
      addPlayer(playerName);
      setPlayerName('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Players</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter player name"
        value={playerName}
        onChangeText={setPlayerName}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddPlayer}>
        <Text style={styles.addButtonText}>Add Player</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Players List:</Text>
      {players.map((player, index) => (
        <View key={index} style={styles.playerRow}>
          <Text>{player.name}</Text>
          <TouchableOpacity onPress={() => onPlayerOut(index)}>
            <Text style={styles.outButton}>Out</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 10 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 5 },
  input: { borderColor: '#ddd', borderWidth: 1, padding: 8, marginBottom: 10 },
  addButton: { backgroundColor: '#4CAF50', padding: 10, alignItems: 'center', borderRadius: 5 },
  addButtonText: { color: '#fff' },
  playerRow: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5 },
  outButton: { color: 'red' },
});
