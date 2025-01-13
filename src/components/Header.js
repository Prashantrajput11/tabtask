import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const Header = ({imageUrl, userName, firstName, lastName, bio}) => {
  return (
    <>
      <Image source={{uri: imageUrl}} style={styles.coverImage} />

      <View style={styles.container}>
        <Image source={{uri: imageUrl}} style={styles.profileImage} />

        <View style={styles.detailsContainer}>
          <Text style={styles.userName}>{userName}</Text>
          <Text style={styles.fullName}>
            {firstName} {lastName}
          </Text>
          <Text style={styles.bio}>{bio}</Text>
        </View>
      </View>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },

  coverImage: {
    width: '100%',
    height: 200,

    backgroundColor: '#d3d3d3',
  },
  profileImage: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 16,
    backgroundColor: '#d3d3d3',
    marginTop: -120,
  },
  detailsContainer: {
    flex: 1,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  fullName: {
    fontSize: 16,
    color: '#555',
    marginTop: 4,
  },
  bio: {
    fontSize: 14,
    color: '#777',
    marginTop: 8,
  },
});
