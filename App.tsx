import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import sailboat from './assets/sailboat.jpg';
import Stock from './components/Stock';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.base}>
        <Text style={styles.header}>Infinity Warehouses</Text>
        <Image source={sailboat} style={{ width: '100%', height: 150, alignSelf: 'center' }} />
        <Stock />
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  base: {
    flex: 1,
    backgroundColor: '#e7eff6',
  },
  header: {
    fontSize: 36,
    paddingBottom: 5,
    textAlign: 'center',
    color: '#2a4d69',
  }
});
