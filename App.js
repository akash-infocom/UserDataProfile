import React, { useState } from 'react';
import { View, StyleSheet, Style } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LandingPage from './assets/components/LandingPage';
import UserForm from './assets/components/UserForm';
import UserList from './assets/components/UserList';

const Stack = createStackNavigator();

const App = () => {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName="Landing" options={{
        headerTitleStyle: {
          backgroundColor: '#000000',
        },
        headerTitle: "User Data Library"
      }} >

        <Stack.Screen name="User Data Form" options={{
          headerStyle: {
            backgroundColor: '#ffa500',
          },
          headerTitleStyle: {
            fontSize: 28,
            textDecorationLine: "underline",
            color: '#000000',

          },
          headerTitleAlign: "center",


        }}>
          {props => <LandingPage {...props} navigateToUserForm={() => props.navigation.navigate('UserForm')} />}
        </Stack.Screen>
        <Stack.Screen name="UserForm" style={{ backgroundColor: '#ffa500', width: "100%" }} options={{
          headerStyle: {
            backgroundColor: '#ffa500',
          },

          headerTitle: "User Form",
          width: '100%',
          headerTitleStyle: {
            color: '#000000',

            fontSize: 25,
            textDecorationLine: "underline",


            width: '100%',

          },
          headerTitleAlign: "center",

        }}>
          {props => <UserForm {...props} addUser={addUser} />}
        </Stack.Screen>
        <Stack.Screen name="UserList" options={{
          headerStyle: {
            backgroundColor: '#ffa500',
            headerTitle: "User List",
          },
          headerTitleStyle: {
            //
            fontSize: 25,
            textDecorationLine: "underline",
            backgroundColor: '#ffa500',
          },
          headerTitleAlign: "center",


        }}>
          {props => <UserList {...props} users={users} />}
        </Stack.Screen>

      </Stack.Navigator>

    </NavigationContainer>

  );



};
const styles = StyleSheet.create({
  userdataforms: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 20,
    backgroundColor: `#6495ed`,
  },
});


export default App;