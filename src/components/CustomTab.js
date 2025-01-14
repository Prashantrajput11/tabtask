import React from 'react';
import {
  View,
  StyleSheet,
  ListRenderItem,
  Image,
  Dimensions,
  Text,
} from 'react-native';
import {Tabs} from 'react-native-collapsible-tab-view';

const HEADER_HEIGHT = 250;
const {width} = Dimensions.get('window');

const photoData = Array(15)
  .fill(null)
  .map((_, index) => ({
    id: index.toString(),
    uri: `https://picsum.photos/200?random=${index + 1}`,
  }));

const Header = () => {
  return <View style={styles.header} />;
};

const CustomTab = () => {
  return (
    <Tabs.Container
      renderHeader={Header}
      headerHeight={HEADER_HEIGHT}
      revealHeaderOnScroll={true}>
      <Tabs.Tab name="Photos">
        <Tabs.FlatList
          data={photoData}
          numColumns={3}
          renderItem={({item}) => (
            <View style={styles.photoContainer}>
              <Image
                source={{uri: item.uri}}
                style={styles.photo}
                resizeMode="cover"
              />
            </View>
          )}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.gridContainer}
        />
      </Tabs.Tab>
      <Tabs.Tab name="Videos">
        <Tabs.ScrollView>
          <Text>hello</Text>
        </Tabs.ScrollView>
      </Tabs.Tab>
    </Tabs.Container>
  );
};

const styles = StyleSheet.create({
  box: {
    height: 250,
    width: '100%',
  },
  boxA: {
    backgroundColor: 'white',
  },
  boxB: {
    backgroundColor: '#D8D8D8',
  },
  header: {
    height: HEADER_HEIGHT,
    width: '100%',
    backgroundColor: '#2196f3',
  },
  photoContainer: {
    width: width / 3,
    height: width / 3,
    padding: 1,
  },
  photo: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ccc', // placeholder color while loading
  },
  gridContainer: {
    padding: 1,
  },
});

export default CustomTab;
