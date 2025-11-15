// app/_layout.tsx
import { Stack } from "expo-router";
import { SafeAreaView, StatusBar, Text, View } from "react-native";
import "./styles/global.css";

export default function RootLayout() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f3f4f6" }}>
      <StatusBar barStyle="light-content" backgroundColor="#1e40af" />
      
      {/* Cabeçalho estilizado */}
      <View style={{ backgroundColor: "#1e3a8a", paddingHorizontal: 16, paddingVertical: 24 }}>
        <Text style={{ color: "white", fontSize: 28, fontWeight: "bold", textAlign: "center" }}>
          👥 Usuários
        </Text>
        <Text style={{ color: "#bfdbfe", fontSize: 12, textAlign: "center", marginTop: 8 }}>
          JSONPlaceholder API
        </Text>
      </View>

      {/* Estrutura de navegação do Expo Router */}
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </SafeAreaView>
  );
}