import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 bg-white items-center justify-center">
      <Text className="text-3xl font-pblack">First native app</Text>
      <StatusBar style="auto" />
      <Link href="/profile">Profile</Link>
    </View>
  );
}
