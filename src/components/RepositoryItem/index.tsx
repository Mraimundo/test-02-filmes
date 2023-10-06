import { FiChevronRight } from "react-icons/fi";

import * as S from "./styles";
import { RepositoryData } from "../../pages/FeedRepositorie";

export function RepositoryItem({ repositories }: RepositoryData) {
  return (
    <S.Repositories>
      {repositories?.map((repos) => (
        <a href="teste" key={repos.id}>
          <img src={repos.owner.avatar_url} alt={repos.owner.login} />
          <div>
            <strong>{repos.full_name}</strong>
            <p>{repos.description}</p>
            <span>{repos.owner.url}</span>
          </div>
          <FiChevronRight size={20} />
        </a>
      ))}
    </S.Repositories>
  );
}
