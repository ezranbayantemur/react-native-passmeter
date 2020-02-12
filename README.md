# React Native Simple Passmeter

Simple password strength meter for React Native.

## Description

PassMeter has 5 level of security. Password string can be at least 4 character.

## Installation

```
npm install react-native-passmeter
```

or

```
yarn add react-native-passmeter
```

## Example Usage

```javascript
import React, { useState } from "react";
import { SafeAreaView, TextInput } from "react-native";
import PassMeter from "react-native-passmeter";

const passLabels = ["Too Short", "Weak", "Normal", "Strong", "Secure"];

export default App = () => {
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        maxLength={15}
        secureTextEntry
        onChangeText={password => setPassword(password)}
      />
      <PassMeter pass={password} labels={passLabels} />
    </SafeAreaView>
  );
};
const styles = {
  container: { flex: 1, justifyContent: "center" },
  input: {
    margin: 5,
    padding: 6,
    borderRadius: 8,
    marginBottom: 8,
    paddingHorizontal: 10,
    backgroundColor: "#eceff1"
  }
};
```

## Properties

| Prop       |  Tyoe   |         Description          | isRequired | Default Value |
| ---------- | :-----: | :--------------------------: | ---------: | :-----------: |
| password   | String  |        Typed password        |       true |               |
| labels     |  Array  | Strength levels of password  |       true |               |
| minLength  | Number  |  Minimum length of password  |      false |       4       |
| maxLength  | Number  |  Maximum length of password  |      false |      15       |
| showLabels | Boolean | Visibilty of strength labels |      false |     true      |
