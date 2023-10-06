import { Link } from "react-router-dom";

import logoImg from "../../assets/logo.svg";

import * as S from "./styles";

// import { useRepository } from "../../hooks/repository";
import { RepositoryItem } from "../../components/RepositoryItem";

export function FeedRepositorie() {
  // const { repositories, like, unlike } = useRepository();

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

      <RepositoryItem />
    </S.Container>
  );
}
