import {FlatList, Pressable, StyleSheet, Text, View, Image} from 'react-native';
import React, {useRef, useState} from 'react';
import VideoPlayer from 'react-native-video-player';

const Tab = () => {
  const playerRef = useRef(null);

  const background = require('../assets/vid1.mp4');
  const tabs = ['Photos', 'Videos', 'Tagging'];
  const [activeTab, setActiveTab] = useState(0);

  const photoData = Array(45)
    .fill(null)
    .map((_, index) => ({
      id: index.toString(),
      uri: `https://picsum.photos/200?random=${index + 1}`,
    }));

  const renderPhotoGrid = () => (
    <FlatList
      data={photoData}
      numColumns={4}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <View style={styles.photoContainer}>
          <Image source={{uri: item.uri}} style={styles.photo} />
        </View>
      )}
      contentContainerStyle={styles.gridContainer}
    />
  );

  const renderVideosTab = () => (
    <View style={styles.videoContainer}>
      <VideoPlayer
        ref={playerRef}
        endWithThumbnail
        thumbnail={{
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
        }}
        source={{
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        }}
        onError={e => console.log(e)}
        showDuration={true}
      />
    </View>
  );

  const renderTaggingTab = () => (
    <View style={styles.contentContainer}>
      <Text style={styles.text}>Tagging Content</Text>
    </View>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 0:
        return renderPhotoGrid();
      case 1:
        return renderVideosTab();
      case 2:
        return renderTaggingTab();
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabBarContainer}>
        {tabs.map((tab, index) => (
          <Pressable
            key={index}
            style={[
              styles.tabButton,
              activeTab === index && styles.activeTabButton,
            ]}
            onPress={() => setActiveTab(index)}>
            <Text style={styles.tabOptions}>{tab}</Text>
          </Pressable>
        ))}
      </View>
      <View style={styles.contentWrapper}>{renderTabContent()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  tabButton: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  tabOptions: {
    color: '#000',
  },
  activeTabButton: {
    borderBottomWidth: 2,
    borderBottomColor: 'tomato',
  },
  contentWrapper: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000',
  },
  photoContainer: {
    flex: 1 / 4,
    aspectRatio: 1,
    padding: 1,
  },
  photo: {
    flex: 1,
  },
  gridContainer: {
    padding: 1,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  videoContainer: {
    width: '100%',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  video: {
    width: '100%',
    height: 200,
  },
});

export default Tab;
