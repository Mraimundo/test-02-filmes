import styled from "styled-components";
import { device } from "../../components/BreakPoints";

export const Header = styled.header`
  max-width: 900px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 30px;

  > a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2s;

    &:hover {
      color: #666;
      text-decoration: underline;
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const Logo = styled.div`
  a {
    text-decoration: none;
    color: ${(props) => props.theme["gray-900"]};
    font-size: 1.875rem;
    font-weight: bold;
    cursor: pointer;
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 30px;

      strong {
        font-size: 2rem;
        color: #3d3d4d;

        @media ${device.desktop} {
          font-size: 2.25rem;
        }
      }

      p {
        font-size: 1.125rem;
        color: #737373;
        margin-top: 6px;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
      & + li {
        margin-left: 30px;

        @media ${device.desktop} {
          margin-left: 80px;
        }
      }
      strong {
        display: block;
        font-size: 2rem;
        color: #3d3d4d;

        @media ${device.desktop} {
          font-size: 2.25rem;
        }
      }

      span {
        display: block;
        margin-top: 4px;
        color: #6c6c80;
      }
    }
  }
`;

export const Issues = styled.div`
  padding: 2.5rem 0 2.1875rem 0;
  max-width: 900px;

  a {
    background: ${(props) => props.theme["white"]};
    border-radius: 5px;
    width: 100%;
    padding: 1.5rem;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 1.25rem;
        color: #3d3d4d;
      }

      p {
        font-size: 1.125rem;
        color: #a8a8b3;
        margin-top: 4px;
      }

      span {
        font-size: 1.125rem;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: ${(props) => props.theme["gray-300"]};
    }
  }
`;
