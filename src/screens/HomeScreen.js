import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import {TEST_USER} from '../constant';
import TabBar from '../components/Tab';

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

        <TabBar />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
