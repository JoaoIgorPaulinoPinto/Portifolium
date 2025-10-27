import axios from "axios";

export interface Repo {
  name: string;
  description: string;
  html_url: string;
  updated_at: string;
}

export const UserReposService = {
  async getUserRepositories(url: string): Promise<Repo[]> {
    if (!url) throw new Error("URL de repositórios inválida.");
    const res = await axios.get<Repo[]>(url);
    return res.data;
  },
};
