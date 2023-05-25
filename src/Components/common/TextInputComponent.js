import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, Text} from 'react-native';

const TextInputComponent = (props) => {
  const [number, onChangeNumber] = React.useState('');

  return (
    <SafeAreaView>
      {/* <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      /> */}
      <Text style={styles.text}>{props.heading}</Text>
      <TextInput
            style={[styles.input,{color: 'white',},props.textstyle]}
            placeholder={props.placeHolder}
            value={props.value}
            testID={props.testID}
            accessibilityLabel={props.accessibilityLabel}
            placeholderTextColor={'pink'}
            keyboardType={props.keyboardType}
            onBlur={() => {
            //   setIsFocused(false)
            //   onBlur()
              if(props.onBlur ) props.onBlur()
            }}
            onFocus={() => {
            //   setIsFocused(true)
            //   onfocus()
              if(props.onFocus) props.onFocus()
            }}
            // textAlign={I18nManager.isRTL === true ? "right" : "left"}
            maxLength={props.maxLength}
            minLength={props.minLength}
            onChangeText={props.onChangeText}
            editable={props.editable}
            autoCapitalize={props.autoCapitalize}
            autoCorrect={props.autoCorrect}
            ref={props.inputRef}
            selectTextOnFocus={false}
            contextMenuHidden={false}
            errorMsg={props.errorMsg}
            sarlabel={props.sarlabel}
            sarlabelstyle={props.sarlabelstyle}
            // oncopy={true}
            //  onpaste={true}
            // returnKeyType={Platform.OS === "ios" ? "done" : "next"}
            secureTextEntry={props.secureTextEntry}
          />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    margin: 12,
    borderWidth: 3,
    padding: 10,
    borderRadius : 20,
    borderColor: 'black',
    fontSize : 25
  },
  text: {
    marginHorizontal: 12,
    fontSize : 25,
    color: 'white',
    fontWeight : 'bold',
    backgroundColor: 'rgba(124, 148, 142, 0.3)',
  }
});

export default TextInputComponent;