import styled, { css } from "styled-components";
import { shade } from "polished";

type FormProps = {
  HasError: boolean;
};

export const Container = styled.div``;

export const Title = styled.h2`
  font-size: 2.1875rem;
  color: ${(props) => props.theme["gray-200"]};

  max-width: 450px;
  line-height: 40px;
  padding: 1.25rem 0 0.9375rem 0;
`;

export const SearchForm = styled.form<FormProps>`
  margin-bottom: 40px;
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
    border: 2px solid ${(props) => props.theme["white"]};

    ${(props) =>
      props.HasError &&
      css`
        border-color: ${(props) => props.theme["red-200"]};
      `}

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

export const Error = styled.span`
  display: block;
  color: ${(props) => props.theme["red-200"]};
  margin-top: 10px;
`;
