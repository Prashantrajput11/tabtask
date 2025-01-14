import VideoPlayer from 'react-native-video-player';

import {StyleSheet, Text, View} from 'react-native';
import React, {useRef} from 'react';

const CVideoPlayer = () => {
  const playerRef = useRef(null);
  return (
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
  );
};

export default CVideoPlayer;

const styles = StyleSheet.create({});
