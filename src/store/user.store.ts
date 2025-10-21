import { create } from "zustand";
import type { GithubUser } from "../Models/GithubUser";

// Definindo o tipo do estado
interface UserState {
  user: GithubUser | null;
  setUser: (user: GithubUser) => void;
  clearUser: () => void;
}

// Criando o store
const useUser = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
}));

export default useUser;
