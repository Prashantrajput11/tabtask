import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Pressable,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const {height, width} = Dimensions.get('window');

const Header = ({imageUrl, userName, firstName, lastName, bio}) => {
  return (
    <>
      <Image source={{uri: imageUrl}} style={styles.coverImage} />

      <View style={styles.container}>
        <Image source={{uri: imageUrl}} style={styles.profileImage} />

        <View style={styles.detailsContainer}>
          <Text style={styles.fullName}>
            {firstName} {lastName}
          </Text>
          <Text style={styles.userName}>{userName}</Text>

          <Text style={styles.bio}>{bio}</Text>

          <Pressable
            style={({pressed}) => [
              styles.followButton,
              pressed && styles.followButtonPressed,
            ]}>
            <Text style={styles.followButtonText}>Follow</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#000',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  coverImage: {
    width: '100%',
    height: wp(50),
    backgroundColor: '#d3d3d3',
  },
  profileImage: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 16,
    backgroundColor: '#d3d3d3',
    marginTop: -60,
  },
  detailsContainer: {
    marginTop: 12,
  },
  userName: {
    fontSize: 16,
    fontWeight: '100',
    color: '#fff',
  },
  fullName: {
    fontSize: 16,
    color: '#fff',
    marginTop: 4,
  },
  bio: {
    fontSize: 14,
    color: '#fff',
    marginTop: 8,
  },
  followButton: {
    // backgroundColor: '#FFD700',
    backgroundColor: 'tomato',
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginTop: 16,
  },
  followButtonPressed: {
    backgroundColor: '#F0C000',
    // opacity: 0.5,
    transform: [{scale: 0.98}],
  },
  followButtonText: {
    color: '#000',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
});
