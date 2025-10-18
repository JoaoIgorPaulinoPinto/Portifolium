import axios from "axios";
import { useEffect, useState } from "react";
import ProjectCard from "../project-card/project-card";
import "./projects-list.css";

interface Repo {
  name: string;
  description: string;
  url: string;
  language: string;
  updated_at: string;
}

export default function ProjectList() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3000/user/repos", { withCredentials: true })
      .then((res) => {
        setRepos(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao buscar repositórios:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Carregando projetos...</p>;

  return (
    <div className="projects">
      {repos.length > 0 ? (
        repos.map((repo) => (
          <ProjectCard
            dataAtt={repo.updated_at}
            key={repo.url}
            nome={repo.name}
            link={repo.url}
          />
        ))
      ) : (
        <></>
      )}
    </div>
  );
}
