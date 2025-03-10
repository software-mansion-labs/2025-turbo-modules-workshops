import { useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {
  getPromise,
  multiply,
  passArray,
  passFunction,
  passObject,
  passString,
  useScreenOrientation,
} from 'react-native-turbo-modules-workshops';

export default function App() {
  const orientation = useScreenOrientation();

  useEffect(() => {
    passFunction((value) => console.log(value));
    getPromise('Workshops!').then((data) => console.log(data));
  }, []);

  return (
    <View style={styles.container}>
      <Text>Orientation: {orientation}</Text>
      <Text>multiply: {multiply(3, 7)}</Text>
      <Text>passString: {passString('Workshops')}</Text>
      <Text>passArray: {passArray([1, 2, 3]).join(', ')}</Text>
      <Text>
        passObject:
        {JSON.stringify(passObject({ index: 1, data: 'Workshops' }))}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
