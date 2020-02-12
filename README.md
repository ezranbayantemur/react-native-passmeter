# React Native Simple Passmeter

Simple password strength meter for React Native.

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

| Prop   |  Type  | isRequired |
| ------ | :----: | ---------: |
| pass   | String |        Yes |
| labels | Array  |        Yes |
