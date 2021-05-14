import React, { useState, useEffect } from 'react'
import { View, Dimensions, Animated, ViewPropTypes } from 'react-native'
import PropTypes from 'prop-types'

const
    deviceWindow = Dimensions.get('window'),
    regexArr = [/[a-z]/, /[A-Z]/, /[0-9]/, /[^A-Za-z0-9]/]

const PassMeter = props => {
    const
        barLength = deviceWindow.width * 0.9,
        [passStat, setPassStat] = useState('Weak'),
        [animateVal, setAnimateVal] = useState(new Animated.Value(0)),
        [animateColor, setAnimateColor] = useState(new Animated.Value(0))

    useEffect(() => {
        Animated.spring(animateVal, {
            bounciness: 15,
            toValue: barLength * (props.password.length / props.maxLength),
            useNativeDriver: false,
        }).start()
        let passPoint = 0

        if (props.password.length > 0 && props.password.length < props.minLength)
            setPassStat(props.labels[0])
        else {
            regexArr.forEach(rgx => rgx.test(props.password) ? passPoint += 1 : null)
            setPassStat(props.labels[passPoint])
        }
        Animated.timing(animateColor, {
            toValue: passPoint,
            duration: 300,
            useNativeDriver: false,
        }).start()

    }, [props.password])

    const interpolateColor = animateColor.interpolate({
        inputRange: [0, 4],
        outputRange: [props.fromColor, props.toColor]
    })

    return (
        <View style={{ alignSelf: 'center' }}>
            <View style={[styles.backBar, { backgroundColor: props.backgroundColor }]} />
            <Animated.View style={[styles.mainBar, { backgroundColor: interpolateColor, width: animateVal }]} />
            {
                props.showLabels ?
                    props.password.length != 0 ?
                        <Animated.Text style={{ margin: 10, marginTop: 5, color: interpolateColor }}>{passStat}</Animated.Text>
                        : null
                    : null
            }
        </View>
    )
}

const styles = {
    backBar: {
        width: deviceWindow.width * 0.9,
        height: 10,
        borderRadius: 25
    },
    mainBar: {
        position: 'absolute',
        backgroundColor: 'blue',
        height: 10,
        borderRadius: 25
    }
}

PassMeter.propTypes = {
    minLength: PropTypes.number,
    showLabels: PropTypes.bool,
    maxLength: PropTypes.number,
    labels: PropTypes.array.isRequired,
    password: PropTypes.string.isRequired,
    backgroundColor: ViewPropTypes.style,
    fromColor: ViewPropTypes.style,
    toColor: ViewPropTypes.style,
}

PassMeter.defaultProps = {
    minLength: 4,
    maxLength: 15,
    showLabels: true,
    backgroundColor: 'gray',
    fromColor: 'red',
    toColor: 'green',
}

export default PassMeter