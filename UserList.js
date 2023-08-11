import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const UserList = ({ users }) => {
  return (
    <View style={styles.container} >
      <Text style={styles.title} ></Text>
      <FlatList
        data={users}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.userItem}>
            <Text>Name: {item.name}</Text>
            <Text>Email: {item.email}</Text>
            <Text>Age: {item.age}</Text>
            <Text>Gender: {item.gender}</Text>
            <Text>Address: {item.address}</Text>
            <Text>Hobby: {item.hobby}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   
    padding:5,
    backgroundColor:'#c0c0c0',
    headerTitleAlign: "center",
  },
  
  userItem: {
    marginBottom: 20,
    padding: 10,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor:'#fffafa',
  },
});

export default UserList;