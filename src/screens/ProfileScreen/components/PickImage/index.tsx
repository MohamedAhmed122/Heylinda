import React, {useState} from 'react';

// RENDER
import * as ImagePicker from 'react-native-image-picker';
import {Alert, View, TouchableOpacity, Image} from 'react-native';
import Toast from 'react-native-toast-message';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './styles';

export default function PickImage() {
  const [fileUri, setFileUri] = useState('');
  const [file, setFile] = useState('');

  console.log(file);

  //Pick Image
  const imageGalleryLaunch = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
        mediaType: 'photo',
      },
    };

    ImagePicker.launchImageLibrary(options, (res: any) => {
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        Alert.alert(res.customButton);
      } else {
        console.log(res, 'response');
        setFileUri(res.assets[0].uri);

        setFile(res.assets[0]);
        Toast.show({
          type: 'success',
          text1: 'Success',
          text2: 'You have uploaded your photo.',
          topOffset: 130,
          bottomOffset: 140,
        });
      }
    });
  };

  return (
    <View>
      <TouchableOpacity style={styles.contain} onPress={imageGalleryLaunch}>
        {fileUri !== '' ? (
          <Image
            source={{uri: fileUri}}
            style={styles.image}
            resizeMode="cover"
          />
        ) : (
          <Entypo name="camera" color="black" size={40} />
        )}
      </TouchableOpacity>
    </View>
  );
}
