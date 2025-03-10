import { Text, View, StyleSheet } from 'react-native';
import { multiply } from 'react-native-turbo-modules-workshops';

const result = multiply(3, 7);

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Result:
        <Text style={styles.results}> {result}</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    fontSize: 20,
    marginTop: 20,
    fontWeight: 'bold',
  },
  results: {
    fontFamily: 'Courier',
    fontWeight: 'normal',
    paddingLeft: 10,
  },
});
