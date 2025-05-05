import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import { NavigationContainer, useFocusEffect } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const UserList = ({ navigation, route }) => {
  const [userName, setUserName] = useState('John Doe');

  useEffect(() => {
    if (route.params?.updatedName) {
      setUserName(route.params.updatedName);
    }
  }, [route.params?.updatedName]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User List Screen</Text>
      <Text style={styles.text}>User Name: {userName}</Text>
      <Button
        title="Edit User"
        color="#666"
        onPress={() => navigation.navigate('User Details', { userName })}
      />
    </View>
  );
};

const UserDetails = ({ route, navigation }) => {
  const [name, setName] = useState(route.params.userName);

  const saveChanges = () => {
    navigation.navigate('User List', { updatedName: name });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Details Screen</Text>
      <Text style={styles.text}>Edit Name:</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        style={styles.input}
        placeholder="Enter name"
        placeholderTextColor="#999"
      />
      <Button title="Save" color="#444" onPress={saveChanges} />
    </View>
  );
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="User List"
        screenOptions={{
          headerStyle: { backgroundColor: '#ccc' },
          headerTintColor: '#333',
        }}
      >
        <Stack.Screen name="User List" component={UserList} />
        <Stack.Screen name="User Details" component={UserDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    color: '#333',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
  input: {
    width: '80%',
    padding: 10,
    borderColor: '#aaa',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    color: '#000',
    backgroundColor: '#fff',
  },
});

export default App;
