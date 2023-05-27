import React, { useState } from 'react';
import { TouchableOpacity, ImageBackground, StyleSheet, Text, View } from 'react-native';
import PngLocations from '../constants/pngLocations';
import TextInputComponent from '../Components/common/TextInputComponent'
import Modal from "../Components/common/Modal";


interface User {
  username: string;
  password: string;
}

const Prelogin: React.FC<User> = ({
  username,
  password,
}) => {
  const [user, setuser] = useState(username);
  const [pass, setpass] = useState(password);
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={PngLocations.prelogin_bg} resizeMode="cover" style={styles.image}>
        <TextInputComponent
          heading={"Username"}
          value={user}
          onChangeText={setuser}
        />
        <TextInputComponent
          heading={"Password"}
          value={pass}
          onChangeText={setpass} />

        <TouchableOpacity style={styles.button} onPress={toggleModal}>
          <Text style={styles.buttontext}>Proceed to Login</Text>
        </TouchableOpacity>
        <Modal showmodal={isModalVisible} setshowmodal={toggleModal} />
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
  button: {
    alignItems: 'center',
    backgroundColor: 'rgba(168, 245, 226, 0.8)',
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 20,
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