import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import {TEST_USER} from '../constant';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#000'}}>
      <ScrollView>
        <Header
          imageUrl={TEST_USER.imageUrl}
          userName={TEST_USER.userName}
          firstName={TEST_USER.firstName}
          lastName={TEST_USER.lastName}
          bio={TEST_USER.bio}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
