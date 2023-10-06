import { MdFavorite } from "react-icons/md";

import { useRepository } from "../../hooks/repository";
import * as S from "./styles";

export function RepositoryItem() {
  const { repositories, like, unlike } = useRepository();

  return (
    <S.Repositories>
      {repositories?.map((repos) => (
        <section key={repos.id}>
          <img src={repos.owner.avatar_url} alt={repos.owner.login} />
          <div>
            <strong>{repos.full_name}</strong>
            <p>{repos.description}</p>
            <span>{repos.owner.url}</span>
          </div>

          <button
            onClick={() =>
              repos.like ? unlike(Number(repos.id)) : like(Number(repos.id))
            }
          >
            <MdFavorite size={24} color={repos.like ? "red" : "#3a3a3a"} />
          </button>
        </section>
      ))}
    </S.Repositories>
  );
}
