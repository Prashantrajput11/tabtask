import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

const Tab = () => {
  let tabs = ['Photos', 'Videos', 'Tagging'];

  const [activeTab, setActiveTab] = useState(0);

  const renderTabContent = () => {
    switch (activeTab) {
      case 0:
        return <Text style={{color: '#fff'}}>Photos</Text>;
      case 1:
        return <Text style={{color: '#fff'}}>Videos</Text>;
      case 2:
        return <Text style={{color: '#fff'}}>Tagging</Text>;
      default:
        return null;
    }
  };

  console.log('active', activeTab);
  return (
    <View>
      <View style={styles.tabBarContainer}>
        {tabs.map((tab, index) => {
          return (
            <Pressable
              style={styles.tabButton}
              onPress={() => setActiveTab(index)}>
              <Text style={styles.tabOptions}>{tab}</Text>
            </Pressable>
          );
        })}
      </View>

      {renderTabContent()}
    </View>
  );
};

export default Tab;

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  tabButton: {
    backgroundColor: 'tomato',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  tabOptions: {
    color: '#fff',
  },
});
