import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';
import {
  Button,
  TextInput,
  Headline,
  Subheading,
  IconButton,
  Snackbar,
} from 'react-native-paper';
import {connect} from 'react-redux';

function NewsFeed(props) {
  const [state, setState] = useState([]);
  useEffect(() => {
    // console.log(images);
    setState(props.images);
    // console.log(state);
  }, []);
  return (
    <ScrollView>
      <View style={{backgroundColor: '#5B2C6F'}}>
        <Headline style={styles.heading}>Sweet Selfie App</Headline>
      </View>
      <IconButton
        style={{textAlign: 'center', textAlign: 'center'}}
        icon="refresh"
        size={25}
        color="purple"
        onPress={() => {
          console.log(props.images);
          setState(props.images);
        }}
      />
      {state.map((data, index) => {
        return (
          <React.Fragment>
            <View key={index} style={styles.placeholder}>
              <Image source={data.uri} style={styles.img} />
            </View>
            <Subheading>{data.caption}</Subheading>
          </React.Fragment>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  heading: {
    marginVertical: 10,
    textAlign: 'center',
    color: 'white',
  },
  placeholder: {
    borderWidth: 2,
    borderColor: '#694fad',
    width: '100%',
    height: 340,
    alignItems: 'center',
  },
  img: {
    width: '100%',
    height: '100%',
  },
});

const mapStateToProps = state => ({
  images: state.images.images,
});

export default connect(mapStateToProps)(NewsFeed);
