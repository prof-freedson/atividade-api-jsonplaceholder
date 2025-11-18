import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { userService } from '../../services/userService';
import { User } from '../../types/users';
import { useRouter } from 'expo-router';

export default function UsersList() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const loadUsers = async () => {
    try {
      setLoading(true);
      const usersData = await userService.getAllUsers();
      setUsers(usersData);
      setError(null);
    } catch (err) {
      setError('Erro ao carregar usuários');
      console.error('Erro ao carregar usuários:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleDeleteUser = async (userId: number) => {
    Alert.alert(
      'Confirmar exclusão',
      'Tem certeza que deseja excluir este usuário?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Excluir',
          style: 'destructive',
          onPress: async () => {
            try {
              await userService.deleteUser(userId);
              Alert.alert('Sucesso', 'Usuário excluído com sucesso!');
              setUsers(users.filter(user => user.id !== userId));
            } catch (err) {
              Alert.alert('Erro', 'Erro ao excluir usuário');
              console.error('Erro ao excluir usuário:', err);
            }
          },
        },
      ],
    );
  };

  const navigateToUserDetails = (user: User) => {
    router.push({
      pathname: '/users/user',
      params: { userId: user.id.toString() }
    });
  };

  const navigateToCreateUser = () => {
    router.push('/users/form');
  };

  const navigateToEditUser = (user: User) => {
    router.push({
      pathname: '/users/form',
      params: { userId: user.id.toString() }
    });
  };

  const renderUserItem = ({ item }: { item: User }) => (
    <TouchableOpacity
      className="bg-white p-4 mb-3 rounded-xl shadow"
      onPress={() => navigateToUserDetails(item)}
    >
      <Text className="text-lg font-semibold text-gray-800">Nome: {item.name}</Text>
      <Text className="text-gray-600">Email: {item.email}</Text>
      <Text className="text-gray-600 mb-2">Username: {item.username}</Text>

      <View className="flex-row gap-3 mt-2">
        <TouchableOpacity
          className="bg-blue-500 px-4 py-2 rounded-lg"
          onPress={() => navigateToEditUser(item)}
        >
          <Text className="text-white font-medium">Editar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-red-500 px-4 py-2 rounded-lg"
          onPress={() => handleDeleteUser(item.id)}
        >
          <Text className="text-white font-medium">Excluir</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" />
        <Text className="text-gray-600 mt-3">Carregando usuários...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View className="flex-1 justify-center items-center p-6">
        <Text className="text-red-600 text-lg font-semibold mb-4">{error}</Text>
        <TouchableOpacity
          className="bg-blue-600 px-6 py-3 rounded-xl"
          onPress={loadUsers}
        >
          <Text className="text-white font-semibold">Tentar novamente</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-gray-100 p-5">
      <Text className="text-2xl font-bold mb-4 text-gray-800">
        Lista de Usuários
      </Text>

      <TouchableOpacity
        className="bg-green-600 px-4 py-3 rounded-xl mb-4"
        onPress={navigateToCreateUser}
      >
        <Text className="text-white text-center font-semibold">
          Adicionar Novo Usuário
        </Text>
      </TouchableOpacity>

      <FlatList
        data={users}
        renderItem={renderUserItem}
        keyExtractor={(item) => item.id.toString()}
        refreshing={loading}
        onRefresh={loadUsers}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
