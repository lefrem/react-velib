import React, { useState } from 'react';
import { Animated, Text, View, StyleSheet } from 'react-native';

const Fade = (props) => {
  const [fadeAnim] = useState(new Animated.Value(0.25))
  React.useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(
          fadeAnim,
       {
         toValue: 4,
         duration: 1500,
       },
        ),
        Animated.timing(
          fadeAnim,
       {
         toValue: 0.25,
         duration: 1500,
       },
        )
      ]),
    ).start()
  }, [])

  return (
    <Animated.View
      style={{
        ...props.style,
        flex: fadeAnim,         
      }}
    >
      {props.children}
    </Animated.View>
  );
}

export default () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',}}>
      <Fade style={{...styles.allBlock, ...styles.colorBlue}}>
        <Text style={styles.allText}>Bloc 1</Text>
      </Fade>
      <View style={styles.redBlock}>
        <Text style={styles.allText}>Bloc 2</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  redBlock: {
    flex: 1,
    backgroundColor: 'red',
    width: '90%',
    borderColor: 'black',
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 10,
  },
  allText: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
  },
  allBlock: {
    width: '90%',
  },
  colorBlue: {
    backgroundColor: 'blue',
    borderColor: 'black',
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 10,
  }
})