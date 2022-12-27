import React, { useState } from 'react'
import {
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native'

const App = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false)
  const keyBoardHide = () => {
    Keyboard.dismiss()
    setIsShowKeyboard(false)
  }
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./assets/greg-rosenke-6QnEf_b47eA-unsplash.jpg')}
        resizeMode="cover"
        style={styles.image}
      >
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' && 'padding'}>
          <View
            style={{ ...styles.form, marginBottom: isShowKeyboard ? 20 : 100 }}
          >
            <View>
              <Text style={styles.text}>Email</Text>
              <TextInput
                style={styles.input}
                textAlign={'center'}
                onFocus={() => {
                  setIsShowKeyboard(true)
                }}
              />
            </View>
            <View style={{ marginTop: 20 }}>
              <Text style={styles.text}>Password</Text>
              <TextInput
                style={styles.input}
                textAlign={'center'}
                secureTextEntry={true}
                onFocus={() => {
                  setIsShowKeyboard(true)
                }}
              />
            </View>
            <TouchableOpacity
              style={styles.btn}
              activeOpacity={0.8}
              onPress={keyBoardHide}
            >
              <Text style={styles.btnTitle}>Sign in</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  text: {
    color: 'white',
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#f0f8ff',
    height: 40,
    borderRadius: 8,
    color: '#f0f8ff',
  },
  form: {
    marginHorizontal: 40,
  },
  btn: {
    borderWidth: 1,
    height: 40,
    borderRadius: 6,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 40,

    ...Platform.select({
      ios: {
        borderColor: '#f0f8ff',
        backgroundColor: 'transparent',
      },
      android: {
        borderColor: 'transparent',
        backgroundColor: `#4169e1`,
      },
    }),
  },
  btnTitle: {
    fontSize: 18,
    ...Platform.select({
      ios: {
        color: '#4169e1',
      },
      android: {
        color: 'white',
      },
    }),
  },
})

export default App
