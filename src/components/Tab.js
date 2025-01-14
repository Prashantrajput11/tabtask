import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  ScrollView,
} from 'react-native';
import React, {useRef, useState} from 'react';
import VideoPlayer from 'react-native-video-player';
import {TEST_USER, videoData} from '../constant';
import VoiceText from './VoiceText';
import Header from './Header';

const Tab = () => {
  const playerRef = useRef(null);

  const tabs = ['Photos', 'Videos', 'Tagging', 'Voice'];
  const [activeTab, setActiveTab] = useState(0);

  const photoData = Array(45)
    .fill(null)
    .map((_, index) => ({
      id: index.toString(),
      uri: `https://picsum.photos/200?random=${index + 1}`,
    }));

  const renderPhotoGrid = () => (
    <FlatList
      key="photos"
      data={photoData}
      numColumns={3}
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
    <FlatList
      data={videoData}
      key="videos"
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <View style={styles.videoContainer}>
          <VideoPlayer
            ref={playerRef}
            endWithThumbnail
            thumbnail={{uri: item.thumbnail}}
            source={{uri: item.uri}}
            onError={e => console.log(e)}
            showDuration={true}
          />
        </View>
      )}
      contentContainerStyle={styles.videoListContainer}
      showsVerticalScrollIndicator={false}
    />
  );

  const renderTaggingTab = () => (
    <View style={styles.contentContainer}>
      <Text style={styles.text}>Tagging Content</Text>
    </View>
  );
  const renderVoiceToTextTab = () => <VoiceText />;

  const renderTabContent = () => {
    switch (activeTab) {
      case 0:
        return renderPhotoGrid();
      case 1:
        return renderVideosTab();
      case 2:
        return renderTaggingTab();
      case 3:
        return renderVoiceToTextTab();
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <>
            <Header
              imageUrl={TEST_USER.imageUrl}
              userName={TEST_USER.userName}
              firstName={TEST_USER.firstName}
              lastName={TEST_USER.lastName}
              bio={TEST_USER.bio}
            />
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.tabBarContainer}
              contentContainerStyle={styles.tabBarContentContainer}>
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
            </ScrollView>
          </>
        }
        data={[]}
        renderItem={null}
        ListFooterComponent={
          <View style={styles.contentWrapper}>{renderTabContent()}</View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBarContainer: {
    backgroundColor: '#f8f8f8',
    zIndex: 10,
  },
  tabBarContentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  tabButton: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  tabOptions: {
    color: '#000',
    fontWeight: '500',
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
    fontSize: 18,
  },
  photoContainer: {
    flex: 1 / 3,
    aspectRatio: 1,
    padding: 1,
  },
  photo: {
    flex: 1,
    resizeMode: 'cover',
  },
  gridContainer: {
    padding: 1,
  },
  videoListContainer: {
    padding: 5,
  },
  videoContainer: {
    marginVertical: 10,
  },
});

export default Tab;
