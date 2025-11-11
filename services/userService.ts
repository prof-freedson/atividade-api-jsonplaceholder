/* Operações CRUD dos dados do usuário */

import axios from 'axios';
import { User } from '../types/users';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

// Criar instância do axios
const api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});

// GET - Listar todos os usuários
export const getAllUsers = async (): Promise<User[]> => {
  try {
    const response = await api.get<User[]>('/');
    return response.data;
  } catch (error) {
    console.error('Erro ao listar usuários:', error);
    throw error;
  }
};

// GET - Obter um usuário por ID
export const getUserById = async (id: number): Promise<User> => {
  try {
    const response = await api.get<User>(`/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao obter usuário ${id}:`, error);
    throw error;
  }
};

// POST - Criar um novo usuário
export const createUser = async (userData: Omit<User, 'id'>): Promise<User> => {
  try {
    const response = await api.post<User>('/', userData);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    throw error;
  }
};

// PUT - Atualizar um usuário
export const updateUser = async (id: number, userData: Partial<User>): Promise<User> => {
  try {
    const response = await api.put<User>(`/${id}`, userData);
    return response.data;
  } catch (error) {
    console.error(`Erro ao atualizar usuário ${id}:`, error);
    throw error;
  }
};

// DELETE - Deletar um usuário
export const deleteUser = async (id: number): Promise<void> => {
  try {
    await api.delete(`/${id}`);
  } catch (error) {
    console.error(`Erro ao deletar usuário ${id}:`, error);
    throw error;
  }
};