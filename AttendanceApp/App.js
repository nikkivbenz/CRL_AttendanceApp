
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { createClient } from "@supabase/supabase-js"

const supabase = createClient('db.lsqhlbmfktqmuewkbejb.supabase.co', )

export default function App() {
  return (
    <View style={styles.container}>
      <Text> Attendance App </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
