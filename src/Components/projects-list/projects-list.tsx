import { useEffect, useState } from "react";
import type { Repo } from "../../service/UserReposService";
import { UserReposService } from "../../service/UserReposService";
import useUser from "../../store/user.store";
import ProjectCard from "../project-card/project-card";
import "./projects-list.css";
export default function ProjectList() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useUser();

  useEffect(() => {
    if (!user?.repos) return; // evita erro se o user ainda não foi carregado

    const fetchRepos = async () => {
      try {
        const data = await UserReposService.getUserRepositories(user.repos!);
        const mapped = data.map((repo) => ({
          name: repo.name,
          description: repo.description,
          html_url: repo.html_url,
          updated_at: repo.updated_at,
        }));
        setRepos(mapped);
      } catch (err) {
        console.error("Erro ao buscar repositórios:", err);
      } finally {
        console.log("finaly");
        setLoading(false);
      }
    };

    fetchRepos();
  }, [user]);

  if (loading) return <p>Carregando projetos...</p>;

  return (
    <div className="projects">
      {repos.length > 0 ? (
        repos.map((repo) => (
          <ProjectCard
            dataAtt={repo.updated_at}
            key={repo.html_url}
            nome={repo.name}
            link={repo.html_url}
          />
        ))
      ) : (
        <p>Nenhum projeto encontrado</p>
      )}
    </div>
  );
}
