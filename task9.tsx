import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useRoute } from '@react-navigation/native';

const UserList = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>User List Screen</Text>
      <Button
        title="Go to User Details"
        color="#666"
        onPress={() => navigation.navigate('User Details', { userName: 'John Doe' })}
      />
    </View>
  );
};

const UserDetails = () => {
  const route = useRoute();
  const { userName } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Details Screen</Text>
      <Text style={styles.text}>User Name: {userName}</Text>
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
  },
  title: {
    fontSize: 20,
    color: '#333',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: '#555',
    marginTop: 10,
  },
});

export default App;
