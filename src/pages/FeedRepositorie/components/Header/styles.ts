import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding-top: 30px;

  a {
    text-decoration: none;
    color: ${(props) => props.theme["gray-900"]};
    font-size: 38px;
    font-weight: bold;
    cursor: pointer;
  }
`;
