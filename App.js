import {Button, StyleSheet, Text, View, StatusBar} from 'react-native';
import {NavigationContainer, useNavigation, useRoute} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
// import {Ionicons} from "@expo/vector-icons";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

//1. Stack Navigator

// function LoginScreen({navigation}){
//     return(
//         <View>
//           <Text>Login Screen #1</Text>
//           <Button title="Go to Profile" onPress={()=> navigation.navigate('Profile')}/>
//         </View>
//     )
// }
//
// function ProfileScreen({navigation}){
//   return(
//       <View>
//         <Text>Profile Screen #2</Text>
//           <Button title="Go to Settings" onPress={()=> navigation.navigate('Settings')}/>
//       </View>
//   )
// }
//
// function SettingsScreen(){
//   return <Text>Settings Screen #3</Text>
// }
//
// const Stack = createStackNavigator();
// export default function App() {
//   return (
//       <NavigationContainer>
//           <Stack.Navigator initialRouteName="Login">
//               <Stack.Screen name="Login" component={LoginScreen}/>
//               <Stack.Screen name="Profile" component={ProfileScreen}/>
//               <Stack.Screen name="Settings" component={SettingsScreen}/>
//           </Stack.Navigator>
//       </NavigationContainer>
//   );
// }

// function LoginScreen({navigation}) {
//     console.log(navigation)
//     return (
//         <View style={styles.container}>
//             <Text style={styles.title}>Login Screen #1</Text>
//             <Button title="Go to Profile" onPress={() => navigation.navigate('Profile')}/>
//         </View>
//     )
// }
//
// function ProfileScreen({navigation}) {
//     return (
//         <View style={styles.container}>
//             <Text style={styles.title}>Profile Screen #2</Text>
//             <Button title="Go to Settings" onPress={() => navigation.navigate('Settings')}/>
//         </View>
//     )
// }
//
// function SettingsScreen({navigation}) {
//     return (
//         <View style={styles.container}>
//             <Text style={styles.title}>Settings Screen #3</Text>
//             <Button title="Back to Profile #2" onPress={() => navigation.goBack()}/>
//             <Button title="Back to Login #1" onPress={() => navigation.popToTop()}/>
//         </View>
//     )
// }
//
// const Stack = createStackNavigator();
// export default function App() {
//     return (
//         <NavigationContainer>
//             <Stack.Navigator
//                 initialRouteName="Login"
//                 screenOptions={{
//                     headerStyle: {backgroundColor: '#6300ee'},
//                     headerTintColor: '#fff',
//                     headerTitleStyle: {fontWeight: 'bold'},
//                     gestureEnabled: true,
//                     gestureDirection: 'horizontal',
//                     headerShown: true,
//                 }}
//
//             >
//                 <Stack.Screen
//                     name="Login"
//                     component={LoginScreen}
//                     options={{title: 'Login Page'}}
//                 />
//                 <Stack.Screen
//                     name="Profile"
//                     component={ProfileScreen}
//                     options={{title: 'Profile Page', headerStyle: {backgroundColor: '#ff6347'}}}
//                 />
//                 <Stack.Screen
//                     name="Settings"
//                     component={SettingsScreen}
//                     options={{title: 'Settings Page'}}
//                 />
//             </Stack.Navigator>
//         </NavigationContainer>
//     );
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#f8f9fa'
//     },
//     title: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         marginBottom: 20,
//     }
// })

//2.Bottom Tab Navigator

// function HomeScreen(){
//     return(
//         <View>
//           <Text>HOme Screen #1</Text>
//         </View>
//     )
// }
//
// function ProfileScreen(){
//   return(
//       <View>
//         <Text>Profile Screen #2</Text>
//       </View>
//   )
// }
//
// function SearchScreen(){
//   return <Text>Search Screen #3</Text>
// }
//
// const BottomTab = createBottomTabNavigator();
// export default function App() {
//   return (
//       <NavigationContainer>
//           <BottomTab.Navigator initialRouteName="Home">
//               <BottomTab.Screen name="Home" component={HomeScreen}/>
//               <BottomTab.Screen name="Profile" component={ProfileScreen}/>
//               <BottomTab.Screen name="Search" component={SearchScreen}/>
//           </BottomTab.Navigator>
//       </NavigationContainer>
//   );
// }


// function HomeScreen() {
//     return (
//         <View style={styles.container}>
//             <Text style={styles.title}>Home Screen #1</Text>
//         </View>
//     )
// }
//
// function ProfileScreen() {
//     return (
//         <View style={styles.container}>
//             <Text style={styles.title}>Profile Screen #2</Text>
//         </View>
//     )
// }
//
// function SearchScreen() {
//     return (
//         <View style={styles.container}>
//             <Text style={styles.title}>Search Screen #3</Text>
//         </View>
//     )
// }
//
// const BottomTab = createBottomTabNavigator();
// export default function App() {
//     return (
//         <NavigationContainer>
//             <BottomTab.Navigator
//                 initialRouteName="Home"
//                 screenOptions={{
//                     tabBarActiveTintColor: 'red',
//                     tabBarInactiveTintColor: 'blue',
//                     tabBarStyle: { backgroundColor: 'yellow'},
//                     headerShown: true,
//                     tabBarLabelStyle: {
//                         fontSize: 12,
//                         fontWeight: 'bold'
//                     },
//                 }}
//             >
//                 <BottomTab.Screen
//                     name="Home"
//                     component={HomeScreen}
//                     options={{
//                         title: 'Home Screen',
//                         tabBarLabel: 'Home page',
//                         tabBarIcon: ({color, size})=>(
//                             <Ionicons name="home-outline" size={size} color={color}/>
//                         )
//                     }}
//                 />
//                 <BottomTab.Screen
//                     name="Profile"
//                     component={ProfileScreen}
//                     options={{
//                         tabBarIcon: ({color, size})=>(
//                             <Ionicons name="person-outline" size={size} color={color}/>
//                         )
//                     }}
//                 />
//                 <BottomTab.Screen
//                     name="Search"
//                     component={SearchScreen}
//                     options={{
//                         tabBarIcon: ({color, size})=>(
//                             <Ionicons name="search-outline" size={size} color={color}/>
//                         )
//                     }}
//                 />
//             </BottomTab.Navigator>
//         </NavigationContainer>
//     );
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#f8f9fa'
//     },
//     title: {
//         fontSize: 24,
//         fontWeight: 'bold',
//     }
// })

//3.Drawer Navigator

// function LoginScreen(){
//     return(
//         <View>
//           <Text>Login Screen #1</Text>
//         </View>
//     )
// }
//
// function ProfileScreen(){
//   return(
//       <View>
//         <Text>Profile Screen #2</Text>
//       </View>
//   )
// }
//
// function SettingsScreen(){
//   return <Text>Settings Screen #3</Text>
// }
//
// const Drawer = createDrawerNavigator();
// export default function App() {
//   return (
//       <NavigationContainer>
//           <Drawer.Navigator initialRouteName="Login">
//               <Drawer.Screen name="Login" component={LoginScreen}/>
//               <Drawer.Screen name="Profile" component={ProfileScreen}/>
//               <Drawer.Screen name="Settings" component={SettingsScreen}/>
//           </Drawer.Navigator>
//       </NavigationContainer>
//   );
// }

//4.Top Tab Navigator
// function LoginScreen(){
//     return(
//         <View>
//             <Text>Login Screen #1</Text>
//         </View>
//     )
// }
//
// function ProfileScreen(){
//     return(
//         <View>
//             <Text>Profile Screen #2</Text>
//         </View>
//     )
// }
//
// function SettingsScreen(){
//     return <Text>Settings Screen #3</Text>
// }
//
// const TopTab = createMaterialTopTabNavigator();
// export default function App() {
//     return (
//         <NavigationContainer>
//             <TopTab.Navigator initialRouteName="Login">
//                 <TopTab.Screen name="Login" component={LoginScreen}/>
//                 <TopTab.Screen name="Profile" component={ProfileScreen}/>
//                 <TopTab.Screen name="Settings" component={SettingsScreen}/>
//             </TopTab.Navigator>
//         </NavigationContainer>
//     );
// }

// function LoginScreen(){
//     return(
//         <View>
//             <Text>Login Screen #1</Text>
//         </View>
//     )
// }
//
// function ProfileScreen(){
//     return(
//         <View>
//             <Text>Profile Screen #2</Text>
//         </View>
//     )
// }
//
// function SettingsScreen(){
//     return <Text>Settings Screen #3</Text>
// }
//
// const TopTab = createMaterialTopTabNavigator();
// export default function App() {
//     return (
//         <NavigationContainer>
//             <StatusBar backgroundColor="gray"/>
//             <TopTab.Navigator
//                 initialRouteName="Login"
//                 screenOptions={{
//                     tabBarActiveTintColor: '#1e90ff',
//                     tabBarInactiveTintColor: '#8e8e8e',
//                     tabBarIndicatorStyle: {backgroundColor: '#3cff1e'},
//                     tabBarStyle: {backgroundColor: '#b8b3b3'},
//                     animationEnabled: false
//                 }}
//             >
//                 <TopTab.Screen name="Login" component={LoginScreen}/>
//                 <TopTab.Screen name="Profile" component={ProfileScreen}/>
//                 <TopTab.Screen name="Settings" component={SettingsScreen}/>
//             </TopTab.Navigator>
//         </NavigationContainer>
//     );
// }

// function LoginScreen(){
//     return(
//         <View>
//             <Text>Login Screen #1</Text>
//         </View>
//     )
// }
//
// function ProfileScreen(){
//     return(
//         <View>
//             <Text>Profile Screen #2</Text>
//         </View>
//     )
// }
//
// function SettingsScreen(){
//     return <Text>Settings Screen #3</Text>
// }
//
// const TopTab = createMaterialTopTabNavigator();
//
// export default function App() {
//     return (
//         <NavigationContainer>
//             <StatusBar backgroundColor="gray"/>
//             <TopTab.Navigator
//                 initialRouteName="Login"
//                 screenOptions={({ route }) => ({
//                     tabBarActiveTintColor: '#1e90ff',
//                     tabBarInactiveTintColor: '#8e8e8e',
//                     tabBarIndicatorStyle: { backgroundColor: '#3cff1e' },
//                     tabBarStyle: { backgroundColor: '#b8b3b3' },
//                     animationEnabled: false,
//                     tabBarShowIcon: true,
//                     tabBarIcon: ({ color }) => {
//                         let iconName;
//
//                         if (route.name === 'Login') {
//                             iconName = 'log-in-outline';
//                         } else if (route.name === 'Profile') {
//                             iconName = 'person-circle-outline';
//                         } else if (route.name === 'Settings') {
//                             iconName = 'settings-outline';
//                         }
//
//                         return <Ionicons name={iconName} size={20} color={color} />;
//                     },
//                 })}
//             >
//                 <TopTab.Screen name="Login" component={LoginScreen}/>
//                 <TopTab.Screen name="Profile" component={ProfileScreen}/>
//                 <TopTab.Screen name="Settings" component={SettingsScreen}/>
//             </TopTab.Navigator>
//         </NavigationContainer>
//     );
// }

// function HomeScreen() {
//     return (
//         <View>
//             <Text>Home Screen #1</Text>
//         </View>
//     )
// }
//
// function ProfileScreen() {
//     return (
//         <View>
//             <Text>Profile Screen #2</Text>
//         </View>
//     )
// }
//
// const TopTab = createMaterialTopTabNavigator();
//
// const getTabBarIcon = (routeName, color) => {
//     const iconName = routeName === 'Home' ? 'home' : 'person';
//     return <MaterialIcons name={iconName} size={24} color={color}/>
// }
//
// const tabScreenOptions = ({route}) => ({
//     tabBarActiveTintColor: '#1e90ff',
//     tabBarInactiveTintColor: '#8e8e8e',
//     tabBarIndicatorStyle: {backgroundColor: '#3cff1e'},
//     tabBarStyle: {backgroundColor: '#b8b3b3'},
//     animationEnabled: false,
//     tabBarShowIcon: true,
//     tabBarIcon: ({color}) => getTabBarIcon(route.name, color)
// })
//
// export default function App() {
//     return (
//         <NavigationContainer>
//             <StatusBar backgroundColor="gray"/>
//             <TopTab.Navigator
//                 initialRouteName="Home"
//                 screenOptions={tabScreenOptions}
//             >
//                 <TopTab.Screen name="Home" component={HomeScreen}/>
//                 <TopTab.Screen name="Profile" component={ProfileScreen}/>
//             </TopTab.Navigator>
//         </NavigationContainer>
//     );
// }

//5.Switch Navigator
// const Stack = createStackNavigator();
//
// function AuthScreen({navigation}) {
//     return (
//         <View>
//             <Text>Auth Screen</Text>
//             <Button title="Login" onPress={() => navigation.replace('Main')}/>
//         </View>
//     )
// }
//
// function MainScreen() {
//     return <Text>Main App Screen</Text>
// }
//
// export default function App(){
//     const auth = true;
//     const page = auth ? 'Main' : 'Auth';
//     return(
//         <NavigationContainer>
//             <Stack.Navigator initialRouteName={page}>
//                 <Stack.Screen name="Auth" component={AuthScreen}/>
//                 <Stack.Screen name="Main" component={MainScreen}/>
//             </Stack.Navigator>
//         </NavigationContainer>
//     )
// }

//6.Nested Navigation
// const Stack = createStackNavigator();
// const BottomTab = createBottomTabNavigator();
//
// function HomeScreen({navigation}) {
//     return (
//         <View>
//             <Text>Home Screen</Text>
//             <Button title="Go to Details" onPress={() => navigation.navigate('Details')}/>
//         </View>
//     )
// }
//
// function DetailsScreen() {
//     return <Text>Details Screen</Text>
// }
//
// function HomeStack() {
//     return (
//         <Stack.Navigator initialRouteName={"Home"}>
//             <Stack.Screen name="Home" component={HomeScreen}/>
//             <Stack.Screen name="Details" component={DetailsScreen}/>
//         </Stack.Navigator>
//     )
// }
//
// function ProfileScreen() {
//     return <Text>Profile Screen</Text>
// }
//
// export default function App() {
//     return (
//         <NavigationContainer>
//             <BottomTab.Navigator>
//                 <BottomTab.Screen name="HomeStack" component={HomeStack}/>
//                 <BottomTab.Screen name="Profile" component={ProfileScreen}/>
//             </BottomTab.Navigator>
//         </NavigationContainer>
//     )
// }

//1.Передавання параметрів за допомогою navigate
// const Stack = createStackNavigator();
//
// function HomeScreen({navigation}) {
//     const user = {name: 'John', age: 25}
//     return (
//         <View>
//             <Text>Home Screen</Text>
//             <Button title="Go to Profile" onPress={() => navigation.navigate('Profile', {user})}/>
//         </View>
//     )
// }
//
// function ProfileScreen({route}) {
//     const {user} = route.params;
//     console.log(user)
//     return (
//         <View>
//             <Text>Profile Screen</Text>
//             <Text>Name: {user.name}</Text>
//             <Text>Age: {user.age}</Text>
//         </View>
//     )
// }
//
// export default function App() {
//     return (
//         <NavigationContainer>
//             <Stack.Navigator>
//                 <Stack.Screen name="Home" component={HomeScreen}/>
//                 <Stack.Screen name="Profile" component={ProfileScreen}/>
//             </Stack.Navigator>
//         </NavigationContainer>
//     )
// }

//2.Передавання параметрів за допомогою хуків useNavigation and useRoute

const Stack = createStackNavigator();

function HomeScreen() {
    const navigation = useNavigation();
    const user = {name: 'John', age: 25}
    return (
        <View>
            <Text>Home Screen</Text>
            <Button title="Go to Profile" onPress={() => navigation.navigate('Profile', {user})}/>
        </View>
    )
}

function ProfileScreen() {
    const route = useRoute();
    const {user} = route.params;
    console.log(user)
    return (
        <View>
            <Text>Profile Screen</Text>
            <Text>Name: {user.name}</Text>
            <Text>Age: {user.age}</Text>
        </View>
    )
}

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="Profile" component={ProfileScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}