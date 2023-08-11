import React, { useState } from 'react';
import { View,gender, TextInput, Button, StyleSheet,  Text, Dimensions, } from 'react-native';

const UserForm = ({ addUser, navigation }) => {
  const [name, setName] = useState('');
  

  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');

  
  const [address, setAddress] = useState('');
  const [hobby, setHobby] = useState('');
 

  const handleAddUser = () => {
    if (name && email && age && gender && address && hobby) {
      addUser({ name, email, age, gender, address, hobby });
      setName('');
     
      setEmail('');
      setAge('');
      setGender('');
      setAddress('');
      setHobby('');
      navigation.navigate('UserList');
    }
  };

  return (
    
    <View style={{ backgroundColor: '#fff' }}>
      <View style={styles.container}>
      

      
      <Text style={styles.txtstyle}>Name:</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      
        <Text style={styles.txtstyle}>Email:</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <Text style={styles.txtstyle}>Age:</Text>
        <TextInput
          style={styles.input}
          label=" Date of Birth"
          placeholder="Enter Your Age"
          value={age}
          onChangeText={setAge}
          keyboardType="numeric"

        />
  <Text style={styles.txtstyle}>Gender:</Text>
        <TextInput
     style={styles.input}
          placeholder="M/F/Other"
          value={gender}
          onChangeText={setGender}
        />
        <Text style={styles.txtstyle}>Address:</Text>
        <TextInput
          style={styles.input}
          placeholder="Address"
          value={address}
          onChangeText={setAddress}
        />
        <Text style={styles.txtstyle}>
          Hobbies:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Your Hobbies"
          value={hobby}
          onChangeText={setHobby}
        />
        <Button title="Register" onPress={handleAddUser}color="#ffa500" borderRadius="55" marginTop="10"/>
      </View>
    </View>
  );
};
const deviceWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: '100%',
    marginTop: 20,
  
  },
  input: {
    // margin: 5,
    padding: 10,
    borderWidth: 0.2,
    borderRadius: 3,
    width:'100%',
    backgroundColor: `#fff`,
    color: "#000000",
    padding :10,
  marginBottom:10,  
  },
 
  
  label: {
    fontWeight: "bold",
    marginBottom: 10,
  },
  picker: {
    width: 200,
    height: 40,
  },
  txtstyle: {
    fontWeight: "bold",
    color: '#000000',
  },
 
});

export default UserForm;