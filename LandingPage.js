import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const LandingPage = ({ navigateToUserForm }) => {
  return (
    
    <View style={styles.container}>
      <Text style={styles.title}>Welcome To Record Your User List</Text>
      <Text style={styles.subtitle}>Click on the button to get started.</Text>
      <Button title="Go to User Form" onPress={navigateToUserForm} color="#ffa500" width="80%" />
    </View>
    
  );
};

const styles = StyleSheet.create({
  mainContainer:{
    
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    alignItems:'center',
    textAlign:'center',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    borderRadius:3,
  },
  btn:{
    width:'100%',
    borderRadius:45,
    backgroundColor:"white",
    color:'#000000',
  },
});

export default LandingPage;