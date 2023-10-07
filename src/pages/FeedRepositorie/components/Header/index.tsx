import { Link } from "react-router-dom";
import * as S from "./styles";

export function Header() {
  return (
    <S.Header>
      <Link to="/">GITHUB-EXPLORER</Link>
    </S.Header>
  );
}
