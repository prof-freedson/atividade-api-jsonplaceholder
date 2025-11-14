import { User } from "@/types/users";
import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com/users";

export type CreateUserInput = Omit<User, "id">;
export type UpdateUserInput = Partial<Omit<User, "id">>;

export async function getUsers(): Promise<User[]> {
	const resp = await axios.get<User[]>(BASE_URL);
	return resp.data;
}

export async function getUser(id: number): Promise<User> {
	const resp = await axios.get<User>(`${BASE_URL}/${id}`);
	return resp.data;
}

export async function createUser(payload: CreateUserInput): Promise<User> {
	const resp = await axios.post<User>(BASE_URL, payload);
	return resp.data;
}

export async function updateUser(id: number, payload: UpdateUserInput): Promise<User> {
	// JSONPlaceholder accepts PUT/PATCH; using PUT to replace or PATCH to partial-update is acceptable.
	const resp = await axios.put<User>(`${BASE_URL}/${id}`, payload);
	return resp.data;
}

export async function deleteUser(id: number): Promise<void> {
	await axios.delete(`${BASE_URL}/${id}`);
}

export default {
	getUsers,
	getUser,
	createUser,
	updateUser,
	deleteUser,
};
