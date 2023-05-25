import React, {useState}from 'react';
import { TouchableOpacity, ImageBackground, StyleSheet, Text, View, Button } from 'react-native';
import PngLocations from '../constants/pngLocations';
import TextInputComponent from '../Components/common/TextInputComponent'
import Modal from "react-native-modal";


const Prelogin = () => {
  const [number, onChangeNumber] = React.useState('');
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={PngLocations.prelogin_bg} resizeMode="cover" style={styles.image}>
        {/* <Text style={styles.text}>Inside</Text> */}
        <TextInputComponent
          heading={"Username"}
          value={number}
          onChangeText={onChangeNumber}
        />
        <TextInputComponent
          heading={"Password"}
          value={number}
          onChangeText={onChangeNumber} />

        <TouchableOpacity style={styles.button} onPress={toggleModal}>
          <Text style = {styles.buttontext}>Proceed to Login</Text>
        </TouchableOpacity>
        <Modal isVisible={isModalVisible}>
        <View style={{ flex: 1,justifyContent: 'center' }}>
          <Text style = {{color : 'white'}}>Hello!</Text>

          <Button title="Hide modal" onPress={toggleModal} />
        </View>
      </Modal>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
  button : {
    alignItems: 'center',
    backgroundColor: 'rgba(168, 245, 226, 0.8)',
    padding: 10,
    marginHorizontal : 10,
    borderRadius : 20,
  },
  buttontext: {
    color: 'black',
    fontSize: 21,
    lineHeight: 42,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Prelogin;