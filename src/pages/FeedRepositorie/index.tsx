import { useState, FormEvent, useEffect } from "react";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { RepositoryItem } from "../../components/RepositoryItem";
import { api } from "../../services/api";
import { Header } from "./components/Header";
import * as S from "./styles";
import { RepositoryData } from "../../types";

// This function Lists public repositories based on a search field
// And then save the repo list to local storage
// When clicking on a list item, show details

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
      <Header />

      <S.Title>Explore repositórios no Github</S.Title>
      <S.SearchForm HasError={!!inputError} onSubmit={handleSearchRepo}>
        <input
          type="text"
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
          placeholder="Busque por repositório (autor/nome)"
        />

        <button type="submit">
          <HiOutlineMagnifyingGlass size={20} />
          Buscar
        </button>
      </S.SearchForm>
      {inputError && <S.Error>{inputError}</S.Error>}

      {repositories.map((repository) => {
        return <RepositoryItem key={repository.id} repository={repository} />;
      })}
    </S.Container>
  );
}
