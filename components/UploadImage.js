import React, {useState, useEffect} from 'react';
import ImagePicker from 'react-native-image-picker';
import {connect} from 'react-redux';
import {addImage} from '../actions/imageAction';
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
const UploadImage = props => {
  let initialState = {
    caption: '',
    pickedImg: {},
    error: false,
    imageSelected: false,
    label: false,
  };
  const [state, setState] = useState(initialState);
  useEffect(() => {
    console.log('Upload Image');
  }, []);
  let options = {
    storageOptions: {
      skipBackup: true,
      path: 'Pictures',
    },
  };
  const openCamera = () => {
    ImagePicker.launchCamera(options, res => {
      let data = {uri: res.uri};
      console.log(data);
      setState({
        ...state,
        pickedImg: data,
        imageSelected: true,
      });
    });
  };

  const openGallery = () => {
    ImagePicker.launchImageLibrary(options, res => {
      let data = {uri: res.uri};
      console.log(data);
      setState({
        ...state,
        pickedImg: data,
        imageSelected: true,
      });
    });
  };

  const sharePost = () => {
    console.log(state.caption);
    if (state.caption === '') {
      setState({
        ...state,
        error: true,
      });
    }
    if (state.imageSelected === false) {
      alert('Please Choose Image');
    }
    if (state.caption !== '' && state.imageSelected === true) {
      let data = {
        caption: state.caption,
        uri: state.pickedImg,
      };
      console.log(data);
      props.addImage(data);
      setState({
        caption: '',
        pickedImg: {},
        error: false,
        imageSelected: false,
        label: true,
      });
    }
  };
  const onDismissSnackBar = () => {
    setState({
      label: false,
    });
  };
  return (
    <ScrollView>
      <Snackbar
        style={{marginBottom: 50}}
        visible={state.label}
        duration={2000}
        onDismiss={onDismissSnackBar}>
        Image Posted !
      </Snackbar>
      <View style={styles.container}>
        <View style={{backgroundColor: '#5B2C6F'}}>
          <Headline style={styles.heading}>Sweet Selfie App</Headline>
        </View>
        <TextInput
          style={styles.formControl}
          mode="outlined"
          value={state.caption}
          label="What's on your mind !"
          error={state.error}
          onChangeText={text =>
            setState({...state, caption: text, error: false})
          }
        />
        <View style={styles.iconsRow}>
          <View>
            <IconButton
              icon="camera"
              color="#5B2C6F"
              animated={true}
              size={30}
              onPress={openCamera}>
              Take Photo
            </IconButton>
          </View>
          <View>
            <Subheading>OR</Subheading>
          </View>
          <View>
            <IconButton
              icon="image-plus"
              color="#5B2C6F"
              animated={true}
              size={30}
              onPress={openGallery}
              title="Choose from Images">
              Choose from Images
            </IconButton>
          </View>
        </View>
        <View style={styles.placeholder}>
          {state.imageSelected ? (
            <Image source={state.pickedImg} style={styles.img} />
          ) : (
            <IconButton
              style={{marginTop: '25%'}}
              icon="image"
              color="grey"
              size={100}
            />
          )}
        </View>
        <Button
          style={{marginTop: 5}}
          icon="share"
          mode="contained"
          onPress={sharePost}>
          Post Now !
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    marginHorizontal: 25,
  },
  formControl: {
    marginTop: 5,
    height: 45,
  },
  heading: {
    marginVertical: 10,
    textAlign: 'center',
    color: 'white',
  },
  iconsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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

const mapStateToProps = state => ({});

export default connect(mapStateToProps, {addImage})(UploadImage);
