# React Native Simple Passmeter

Simple password strength meter for React Native.

[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

![Pass GIF](https://github.com/ezranbayantemur/react-native-passmeter/blob/master/assets/passwordExample.gif)

## Description

PassMeter has 5 level of security. It's checks the typed password string has any upper case, lower case, numbers and special characters. Password string can be at least 4 character.

| Strength Level |                                   Description                                    |                                       Example |
| -------------- | :------------------------------------------------------------------------------: | --------------------------------------------: |
| 0              |         Length of the password is below then gived or default minLenght          |                        "ac", "A2b", "1&", ... |
| 1              | Password has at least one upper case, lower case, numbers and special characters |          "example", "PASSWORD", "%+%&/!", ... |
| 2              |               Password contains only two condition of the required               |     "exAmpLe", "pa22w0rd", "PA\$\$W%RD!", ... |
| 3              |              Password contains only three condition of the required              |   "3xAmpL3", "^!22w0rd&6", "pA\$\$W%RD!", ... |
| 4              |                 Password contains all of the required conditions                 | "eX@mpL3", "^P@22w0rd", "pA22\$\$W%R1D!", ... |

## Installation

```
npm install react-native-passmeter
```

or

```
yarn add react-native-passmeter
```

## Usage

```javascript
import React, { useState } from "react";
import { SafeAreaView, TextInput } from "react-native";
import PassMeter from "react-native-passmeter";

const MAX_LEN = 15,
  MIN_LEN = 6,
  PASS_LABELS = ["Too Short", "Weak", "Normal", "Strong", "Secure"];

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
      <PassMeter
        showLabels
        password={password}
        maxLength={MAX_LEN}
        minLength={MIN_LEN}
        labels={PASS_LABELS}
      />
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

| Prop       |  Type   |         Description          | isRequired | Default Value |
| ---------- | :-----: | :--------------------------: | ---------: | :-----------: |
| password   | String  |        Typed password        |       true |               |
| labels     |  Array  | Strength levels of password  |       true |               |
| minLength  | Number  |  Minimum length of password  |      false |       4       |
| maxLength  | Number  |  Maximum length of password  |      false |      15       |
| showLabels | Boolean | Visibilty of strength labels |      false |     true      |

## **@0.0.5**

# Contribute

Feel free to contribute, any PR will be welcomed!

# LICENSE

**MIT**
