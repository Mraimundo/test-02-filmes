import { styled } from "styled-components";
import { shade } from "polished";

export const SearchFormContainer = styled.form`
  max-width: 900px;
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border-radius: 5px 0 0 5px;
    border: 0;
    background: ${(props) => props.theme["white"]};
    color: ${(props) => props.theme["gray-500"]};
    padding: 1rem;

    &::placeholder {
      color: ${(props) => props.theme["gray-500"]};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    border: 0;
    padding: 1rem;
    background: transparent;
    border: 1px solid ${(props) => props.theme["green-300"]};
    color: ${(props) => props.theme["green-300"]};
    font-weight: bold;
    border-radius: 6px;
    cursor: pointer;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background: ${shade(0.2, "#00B37E")};
      border-color: ${(props) => props.theme["green-500"]};
      color: ${(props) => props.theme["white"]};
      transition: background-color 0.2s, color 0.2s border-color 0.2s;
    }
  }
`;
