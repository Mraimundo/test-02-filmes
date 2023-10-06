import { useState, FormEvent, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

import logoImg from "../../assets/logo.svg";

import * as S from "./styles";

import { RepositoryItem } from "../../components/RepositoryItem";
import { api } from "../../services/api";

type Repos = {
  id: number;
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
    url: string;
  };
};

export type RepositoryData = {
  repositories: Repos[];
};

export function FeedRepositorie() {
  const [newRepo, setNewRepo] = useState("");
  const [inputError, setInputError] = useState("");
  const [repositories, setRepositories] = useState<RepositoryData[]>(() => {
    const storagedRepositories = localStorage.getItem(
      "@GithubFeed:repositories"
    );

    if (storagedRepositories) {
      return JSON.parse(storagedRepositories);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      "@GithubFeed:repositories",
      JSON.stringify(repositories)
    );
  }, [repositories]);

  async function handleSearchRepo(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();

    if (!newRepo) {
      setInputError("Digite o autor/nome do repositório");
      return;
    }

    try {
      const response = await api.get<RepositoryData>(`repos/${newRepo}`);
      const repository = response.data;
      setRepositories([...repositories, repository]);
      setNewRepo("");
      setInputError("");
    } catch (err) {
      setInputError("Erro na busca por esse repositório");
    }
  }

  return (
    <S.Container>
      <header>
        <img src={logoImg} alt="Logo" />
        <nav>
          <Link to="/">Feed</Link>
          <Link to="like-repositories">Like</Link>
        </nav>
      </header>
      <S.Title>Explore repositórios no Github</S.Title>
      <S.SearchForm hasError={!!inputError} onSubmit={handleSearchRepo}>
        <input
          type="text"
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
          placeholder="Busque por repositório"
        />

        <button type="submit">
          <HiOutlineMagnifyingGlass size={20} />
          Buscar
        </button>
      </S.SearchForm>
      {inputError && <S.Error>{inputError}</S.Error>}

      <RepositoryItem repositories={repositories} />
    </S.Container>
  );
}
