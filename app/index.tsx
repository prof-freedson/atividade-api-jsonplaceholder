// app/index.tsx
import { Link } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#f3f4f6" }}>
      {/* Container principal com padding */}
      <View style={{ paddingHorizontal: 16, paddingVertical: 32 }}>
        {/* Seção de boas-vindas */}
        <View style={{ marginBottom: 24 }}>
          <Text style={{ fontSize: 32, fontWeight: "bold", color: "#1e3a8a", marginBottom: 12 }}>
            Bem-vindo!
          </Text>
          <Text style={{ color: "#374151", fontSize: 16, lineHeight: 24 }}>
            Explore e manipule dados da API JSONPlaceholder. Visualize usuários, posts e comentários de forma intuitiva.
          </Text>
        </View>

        {/* Card com features */}
        <View style={{ marginBottom: 24, borderRadius: 8, backgroundColor: "white", padding: 24 }}>
          <Text style={{ marginBottom: 16, fontSize: 16, fontWeight: "bold", color: "#1f2937" }}>
            ✨ Funcionalidades
          </Text>
          
          <View style={{ gap: 12 }}>
            <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
              <Text style={{ marginRight: 12, fontSize: 16, fontWeight: "bold", color: "#2563eb" }}>•</Text>
              <Text style={{ flex: 1, color: "#374151" }}>
                Listar todos os usuários
              </Text>
            </View>
            
            <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
              <Text style={{ marginRight: 12, fontSize: 16, fontWeight: "bold", color: "#2563eb" }}>•</Text>
              <Text style={{ flex: 1, color: "#374151" }}>
                Visualizar detalhes de cada usuário
              </Text>
            </View>
            
            <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
              <Text style={{ marginRight: 12, fontSize: 16, fontWeight: "bold", color: "#2563eb" }}>•</Text>
              <Text style={{ flex: 1, color: "#374151" }}>
                Criar e editar usuários
              </Text>
            </View>
          </View>
        </View>

        {/* Card com informações da API */}
        <View style={{ marginBottom: 32, borderRadius: 8, backgroundColor: "#eff6ff", padding: 24 }}>
          <Text style={{ marginBottom: 8, fontSize: 14, fontWeight: "bold", color: "#1e3a8a" }}>
            🔗 API Integration
          </Text>
          <Text style={{ fontSize: 12, color: "#1e40af" }}>
            JSONPlaceholder - API RESTful fake para testes
          </Text>
        </View>

        {/* Botão CTA principal */}
        <Link href="/users" asChild>
          <TouchableOpacity 
            style={{ marginBottom: 16, borderRadius: 8, backgroundColor: "#1e40af", paddingHorizontal: 24, paddingVertical: 16 }}
            activeOpacity={0.8}
          >
            <Text style={{ textAlign: "center", fontSize: 16, fontWeight: "bold", color: "white" }}>
              → Explorar Usuários
            </Text>
          </TouchableOpacity>
        </Link>

        {/* Texto informativo */}
        <View style={{ borderTopWidth: 1, borderTopColor: "#d1d5db", paddingVertical: 16 }}>
          <Text style={{ textAlign: "center", fontSize: 12, color: "#6b7280" }}>
            Toque no botão acima para começar a explorar
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}