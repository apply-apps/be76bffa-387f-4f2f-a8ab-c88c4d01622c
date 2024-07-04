// Filename: index.js
// Combined code from all files

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, FlatList, TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator();

const fairyTales = [
  { id: '1', title: 'Cinderella', description: 'A young girl, mistreated by her stepmother and stepsisters...' },
  { id: '2', title: 'Sleeping Beauty', description: 'A princess who falls into a deep sleep due to a curse...' },
  { id: '3', title: 'Snow White', description: 'A princess who is forced to flee from her wicked stepmother...' },
  { id: '4', title: 'Hansel and Gretel', description: 'A brother and sister who come across a house made of candy...' },
  { id: '5', title: 'Little Red Riding Hood', description: 'A girl who encounters a big bad wolf on the way to her grandmother\'s house...' },
];

const HomeScreen = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('Details', { tale: item })}
    >
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={fairyTales}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
};

const TaleDetailScreen = ({ route }) => {
  const { tale } = route.params;

  return (
    <SafeAreaView style={styles.detailContainer}>
      <View style={styles.box}>
        <Text style={styles.detailTitle}>{tale.title}</Text>
        <Text style={styles.description}>{tale.description}</Text>
      </View>
    </SafeAreaView>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Fairy Tales' }} />
        <Stack.Screen name="Details" component={TaleDetailScreen} options={{ title: 'Tale Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  list: {
    paddingHorizontal: 10,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#f9c2ff',
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    color: '#333',
  },
  detailContainer: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 20,
    padding: 16,
  },
  box: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  detailTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
  },
});