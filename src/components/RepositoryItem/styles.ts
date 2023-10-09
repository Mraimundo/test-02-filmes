import styled from "styled-components";
import { device } from "../BreakPoints";

export const Repositories = styled.div`
  max-width: 900px;

  & + div {
    margin: 20px 0 18px 0;
  }

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 1.5rem;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
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
        font-size: 1rem;
        color: #a8a8b3;
        margin-top: 4px;

        @media ${device.desktop} {
          font-size: 1.125rem;
        }
      }
    }

    svg {
      margin-left: auto;
      color: ${(props) => props.theme["gray-300"]};
    }
  }
`;
