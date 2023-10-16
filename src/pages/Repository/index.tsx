import { Link } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import * as S from "./styles";
import { useRepoDetailsData } from "../../hooks/useRepoDetailsData";

// This function shows the details of the list of repositories and issues
// When clicking on an item in the issues list, it redirects to an external link
// with the repository issue

export function Repository() {
  const { repository, issues } = useRepoDetailsData();

  return (
    <>
      <S.Header>
        <S.Logo>
          <Link to="/">GITHUB-EXPLORER</Link>
        </S.Logo>

        <Link to="/">
          <FiChevronLeft size={20} />
          Voltar
        </Link>
      </S.Header>
      {repository && (
        <S.RepositoryInfo>
          <header>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <span>Start</span>
            </li>
            <li>
              <strong>{repository.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{repository.open_issues_count}</strong>
              <span>Issues abertas</span>
            </li>
          </ul>
        </S.RepositoryInfo>
      )}

      <S.Issues>
        {issues?.map((issue) => (
          <a key={issue.id} href={issue.html_url}>
            <div>
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>

            <FiChevronRight size={20} />
          </a>
        ))}
      </S.Issues>
    </>
  );
}
