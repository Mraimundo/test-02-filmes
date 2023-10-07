import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

import * as S from "./styles";

export type RepositoryItemProps = {
  repository: {
    id: number;
    full_name: string;
    description: string;
    owner: {
      login: string;
      avatar_url: string;
      url: string;
    };
  };
};

export function RepositoryItem(props: RepositoryItemProps) {
  const { id, full_name, description, owner } = props.repository;
  return (
    <S.Repositories>
      <Link to={`/repositories/${full_name}`} key={id}>
        <img src={owner.avatar_url} alt={owner.login} />
        <div>
          <strong>{full_name}</strong>
          <p>{description}</p>
          <span>{owner.url}</span>
        </div>
        <FiChevronRight size={20} />
      </Link>
    </S.Repositories>
  );
}
