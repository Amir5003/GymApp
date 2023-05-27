/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef, useEffect } from "react"
import { View, TextInput, Dimensions, StyleSheet, NativeSyntheticEvent, TextInputKeyPressEventData } from "react-native"

const width = Dimensions.get("window").width
const height = Dimensions.get("window").height

// import styles from "./styles"

export interface Props {
  codeCount: number;
  onTyping?: (p: string) => void;
  onFinish?: (p: string) => void;
  initCodes?: string[];
};

const Otp: React.FC<Props> = ({
  codeCount = 4,
  onTyping,
  onFinish,
  initCodes,
}) => {
  const inputCodeRef = useRef(new Array())
  const [codes, setCodes] = useState(initCodes)
  useEffect(() => {
    const codes = []
    for (let i = 0; i < codeCount; i++) {
      codes.push("")
    }
    setCodes(codes)
  }, [])

  type GetCodes = () => string;
  type OnChangeCode = (p: string, q: number) => void;
  type OnKeyPress = (p: NativeSyntheticEvent<TextInputKeyPressEventData>, q: number) => void;
  const getCodes: GetCodes = () => {
    let codeString = ""
    if (codes)
      codes.forEach((code) => {
        codeString += code
      })
    return codeString
  }

  useEffect(() => {
    onTyping && onTyping(getCodes())
    const isTypeFinish = codes?.every(function (i) {
      return i !== ""
    })
    if (isTypeFinish) {
      onFinish && onFinish(getCodes())
    }
  }, [codes])



  const onChangeCode: OnChangeCode = (code, index) => {
    // onChangeCode = (code, index) => {
    const typedCode = code.slice(-1)
    const currentCodes = [...codes || []]
    currentCodes[index] = typedCode
    setCodes(currentCodes)
  }
  // const onKeyPress = (event, index) => {
  const onKeyPress: OnKeyPress = (event, index) => {
    const key = event.nativeEvent.key
    let destIndex = index
    if (key === "Backspace") {
      destIndex = index > 0 ? index - 1 : 0
    } else {
      destIndex = index < codeCount - 1 ? index + 1 : codeCount - 1
    }
    inputCodeRef.current[destIndex].focus()
  }
  return (
    <View style={[styles.form]}>
      {codes?.map((code, index) => {
        return (
          <TextInput
            key={`${index}`}
            ref={(element) => inputCodeRef.current.push(element)}
            style={[
              styles.input,
              { width: width / (codeCount + 2), height: height / 14 },
            ]}
            onChangeText={(text) => { if (onChangeCode) onChangeCode(text, index) }}
            onKeyPress={(event) => onKeyPress(event, index)}
            value={code}
          // {...props}
          />
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  input: {
    marginHorizontal: 4,
    fontSize: 32,
    textAlign: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderColor: '#ddd',
    borderWidth: 1,
  },
});

export default Otp;